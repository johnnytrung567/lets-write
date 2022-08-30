import { Link } from 'react-router-dom'
import Button from '../components/Button'
import InputField from '../components/InputField'

const Register = () => {
    return (
        <div className='min-h-[calc(100vh-50px)] flex items-center relative z-0 bg-[url(/images/register.jpg)] bg-no-repeat bg-cover'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-white/95 dark:bg-black/75 -z-10 ' />
            <div className='w-full max-w-sm mx-auto'>
                <h1 className='text-5xl text-center mb-10'>Register</h1>
                <form>
                    <InputField
                        inputId='username'
                        label='Username'
                        placeholder='Enter your username'
                    />
                    <InputField
                        wrapperStyles='mt-4'
                        inputId='email'
                        type='email'
                        label='Email'
                        placeholder='Enter your email'
                    />
                    <InputField
                        wrapperStyles='mt-4'
                        inputId='password'
                        type='password'
                        label='Password'
                        placeholder='Enter your password'
                    />
                    <InputField
                        wrapperStyles='mt-4'
                        inputId='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        placeholder='Enter your password again'
                    />
                    <Button customStyles='mt-4 w-full bg-purple-700 hover:bg-purple-800'>
                        Register
                    </Button>
                </form>
                <p className='text-center mt-4 text-sm'>
                    Already have an account?{' '}
                    <Link to='/login' className='text-sky-500'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Register
