import { Link } from 'react-router-dom'
import Button from '../components/Button'
import InputField from '../components/InputField'

const Login = () => {
    return (
        <div className='min-h-[calc(100vh-50px)] flex items-center relative z-0 bg-[url(/images/login.jpg)] bg-no-repeat bg-cover'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-white/95 dark:bg-black/75 -z-10 ' />
            <div className='w-full max-w-sm mx-auto'>
                <h1 className='text-5xl text-center mb-10'>Login</h1>
                <form>
                    <InputField
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
                    <Button customStyles='mt-4 w-full'>Login</Button>
                </form>
                <p className='text-center mt-4 text-sm'>
                    Don't have an account?{' '}
                    <Link to='/register' className='text-sky-500'>
                        Register
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default Login
