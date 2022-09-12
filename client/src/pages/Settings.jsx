import { FaUserCircle } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import InputField from '../components/InputField'
import SideBoard from '../components/SideBoard'
import { userLoadingSelector, userSelector } from '../redux/selectors'
import { useRef } from 'react'
import { deleteUser, loadUser, updateUser } from '../redux/slices/usersSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import ModalConfirmDelete from '../components/ModalConfirmDelete'
import { toggleModalShow } from '../redux/slices/themeSlice'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
    const user = useSelector(userSelector)
    const loading = useSelector(userLoadingSelector)
    const avatarRef = useRef(null)

    // React hook form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isDirty },
    } = useForm()

    const handleProfilePicChange = e => {
        if (e.target.files && e.target.files[0]) {
            avatarRef.current.src = URL.createObjectURL(e.target.files[0])
        }
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = data => {
        if (data.profilePic && data.profilePic[0]) {
            const reader = new FileReader()
            reader.readAsDataURL(data.profilePic[0])
            reader.onloadend = () => {
                data.profilePic = reader.result
                dispatchUpdate(data)
            }
        } else {
            data.profilePic = null
            dispatchUpdate(data)
        }
    }

    const dispatchUpdate = async data => {
        const resultAction = await dispatch(updateUser(data))
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

    const handleDelete = async () => {
        const resultAction = await dispatch(deleteUser())
        const result = unwrapResult(resultAction)
        if (result.success) {
            toast.success(result.message)
            dispatch(loadUser())
            navigate('/login')
        } else {
            toast.error(result.message)
        }
    }

    return (
        <div className='flex flex-wrap mt-10'>
            <div className='w-full lg:w-2/3 px-5 py-8'>
                <div className='flex flex-wrap-reverse justify-between items-center'>
                    <h3 className='text-3xl text-teal-700'>
                        Update Your Account
                    </h3>
                    <span
                        className='text-red-700 cursor-pointer ml-auto pl-4'
                        onClick={() => dispatch(toggleModalShow())}
                    >
                        Delete Account
                    </span>
                    <ModalConfirmDelete
                        message='Are you sure you want to delete your account?'
                        onDelete={handleDelete}
                    />
                </div>
                {user && !loading ? (
                    <form
                        className='mt-7 max-w-sm mx-auto'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label className='text-lg block mb-1'>
                            Profile Picture
                        </label>
                        <div className='flex items-center'>
                            {user && (
                                <img
                                    src={user.profilePic.url}
                                    alt=''
                                    className='w-28 h-28 object-cover rounded-2xl'
                                    ref={avatarRef}
                                />
                            )}
                            <label htmlFor='profilePic'>
                                <FaUserCircle
                                    size={24}
                                    className='text-teal-600 ml-3 cursor-pointer'
                                />
                            </label>
                            <input
                                type='file'
                                accept='image/*'
                                id='profilePic'
                                className='hidden'
                                {...register('profilePic', {
                                    onChange: handleProfilePicChange,
                                })}
                            />
                        </div>
                        {user && (
                            <InputField
                                wrapperStyles='mt-4'
                                inputId='username'
                                label='Username'
                                defaultValue={user.username}
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
                        )}
                        {user && (
                            <InputField
                                wrapperStyles='mt-4'
                                inputId='email'
                                label='Email'
                                defaultValue={user.email}
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
                        )}
                        <InputField
                            wrapperStyles='mt-4'
                            type='password'
                            inputId='password'
                            label='Password'
                            register={register}
                            errors={errors.password}
                            validations={{
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password has at least 6 characters',
                                },
                            }}
                        />
                        <Button
                            customStyles='px-20 block mx-auto mt-4'
                            disabled={!isDirty}
                        >
                            Update
                        </Button>
                    </form>
                ) : (
                    <Spinner />
                )}
            </div>
            <SideBoard />
        </div>
    )
}
export default Settings
