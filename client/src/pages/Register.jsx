import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { loadUser, registerUser } from '../redux/slices/usersSlice'
import { toast } from 'react-toastify'
import { unwrapResult } from '@reduxjs/toolkit'
import { userLoadingSelector } from '../redux/selectors'
import Spinner from '../components/Spinner'

const Register = () => {
    const loading = useSelector(userLoadingSelector)

    // React hook form
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm()

    const dispatch = useDispatch()

    const onSubmit = async data => {
        const resultAction = await dispatch(registerUser(data))
        const result = unwrapResult(resultAction)
        if (result.success) {
            toast.success(result.message)
            reset()
            dispatch(loadUser())
        } else {
            toast.error(result.message, {
                position: toast.POSITION.BOTTOM_CENTER,
            })
        }
    }

    return (
        <div className='min-h-[calc(100vh-50px)] flex items-center relative z-0 bg-[url(/images/register.jpg)] bg-no-repeat bg-cover'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-white/95 dark:bg-black/75 -z-10 ' />
            {!loading ? (
                <div className='w-full max-w-sm mx-auto'>
                    <h1 className='text-5xl text-center mb-10'>Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputField
                            inputId='username'
                            label='Username'
                            placeholder='Enter your username'
                            register={register}
                            errors={errors.username}
                            required
                            validations={{
                                minLength: {
                                    value: 3,
                                    message:
                                        'Username has at least 3 characters',
                                },
                            }}
                        />
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
                        <InputField
                            wrapperStyles='mt-4'
                            inputId='confirmPassword'
                            type='password'
                            label='Confirm Password'
                            placeholder='Enter your password again'
                            register={register}
                            errors={errors.confirmPassword}
                            required
                            validations={{
                                validate: value =>
                                    value === getValues('password') ||
                                    'Passwords do not match',
                            }}
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
            ) : (
                <Spinner />
            )}
        </div>
    )
}
export default Register
