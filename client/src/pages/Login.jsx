import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import InputField from '../components/InputField'
import Spinner from '../components/Spinner'
import { userLoadingSelector } from '../redux/selectors'
import { loadUser, loginUser } from '../redux/slices/usersSlice'

const Login = () => {
    const loading = useSelector(userLoadingSelector)

    // React hook form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const dispatch = useDispatch()

    const onSubmit = async data => {
        const resultAction = await dispatch(loginUser(data))
        const result = unwrapResult(resultAction)
        if (result.success) {
            reset()
            dispatch(loadUser())
        } else {
            toast.error(result.message, {
                position: toast.POSITION.BOTTOM_CENTER,
            })
        }
    }

    return (
        <div className='min-h-[calc(100vh-50px)] flex items-center relative z-0 bg-[url(/images/login.jpg)] bg-no-repeat bg-cover'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-white/[0.85] sm:bg-white/90 dark:bg-black/75 -z-10 ' />
            {!loading ? (
                <div className='w-full max-w-sm px-2 mx-auto'>
                    <h1 className='text-5xl text-center mb-10'>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputField
                            wrapperStyles='mt-4'
                            inputId='email'
                            label='Email'
                            placeholder='Enter your email'
                            register={register}
                            errors={errors.email}
                            required
                            validations={{
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Please enter a valid email',
                                },
                            }}
                        />
                        <InputField
                            wrapperStyles='mt-4'
                            inputId='password'
                            type='password'
                            label='Password'
                            placeholder='Enter your password'
                            register={register}
                            errors={errors.password}
                            required
                            validations={{
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password has at least 6 characters',
                                },
                            }}
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
            ) : (
                <Spinner />
            )}
        </div>
    )
}
export default Login
