import { MdAddPhotoAlternate } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import defaultPostPhoto from '../assets/images/default-post-photo.png'
import ContentEditor from '../components/ContentEditor'
import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    categoriesSelector,
    currentPostSelector,
    postLoadingSelector,
    postUpdateModeSelector,
} from '../redux/selectors'
import { addPost, setUpdateMode, updatePost } from '../redux/slices/postsSlice'
import { useNavigate } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import Spinner from '../components/Spinner'

const Write = () => {
    const categories = useSelector(categoriesSelector)
    const post = useSelector(currentPostSelector)
    const loading = useSelector(postLoadingSelector)
    const updateMode = useSelector(postUpdateModeSelector)

    const [content, setContent] = useState(updateMode ? post.content : '')
    const photoRef = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        return () => dispatch(setUpdateMode(false))
    }, [])

    const handlePhotoChange = e => {
        if (e.target.files && e.target.files[0]) {
            photoRef.current.src = URL.createObjectURL(e.target.files[0])
        }
    }

    // React hook form
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isDirty },
    } = useForm()

    const handleAdd = data => {
        data.content = content
        if (data.photo && data.photo[0]) {
            const reader = new FileReader()
            reader.readAsDataURL(data.photo[0])
            reader.onloadend = () => {
                data.photo = reader.result
                dispatchAddPost(data)
            }
        } else {
            data.photo = null
            dispatchAddPost(data)
        }
    }

    const dispatchAddPost = async data => {
        const resultAction = await dispatch(addPost(data))
        const result = unwrapResult(resultAction)
        if (result.success) {
            toast.success(result.message)
            reset()
            setContent('')
            navigate('/')
        } else {
            toast.error(result.message)
        }
    }

    const handleUpdate = data => {
        data.content = content
        if (data.photo && data.photo[0]) {
            const reader = new FileReader()
            reader.readAsDataURL(data.photo[0])
            reader.onloadend = () => {
                data.photo = reader.result
                dispatchUpdatePost(data)
            }
        } else {
            data.photo = null
            dispatchUpdatePost(data)
        }
    }

    const dispatchUpdatePost = async data => {
        const resultAction = await dispatch(
            updatePost({ id: post._id, formData: data })
        )
        const result = unwrapResult(resultAction)
        if (result.success) {
            toast.success(result.message)
            reset()
            setContent('')
            navigate(`/post/${post._id}`)
        } else {
            toast.error(result.message)
        }
    }

    return !loading ? (
        <div className='w-full px-3 mt-16 pb-10'>
            <form
                className='max-w-6xl mx-auto'
                onSubmit={
                    updateMode
                        ? handleSubmit(handleUpdate)
                        : handleSubmit(handleAdd)
                }
            >
                <img
                    src={
                        updateMode && post.photo.url
                            ? post.photo.url
                            : defaultPostPhoto
                    }
                    alt=''
                    ref={photoRef}
                    className='w-full h-64 md:h-80 object-cover rounded-lg'
                />
                <div className='flex items-center'>
                    <label
                        htmlFor='photo'
                        className='w-9 h-9 rounded-full border flex justify-center items-center border-gray-500 text-gray-500 cursor-pointer'
                    >
                        <MdAddPhotoAlternate size={24} />
                    </label>
                    <input
                        type='file'
                        accept='image/*'
                        id='photo'
                        className='hidden'
                        {...register('photo', {
                            onChange: handlePhotoChange,
                        })}
                    />
                    <input
                        type='text'
                        placeholder='Title'
                        defaultValue={updateMode ? post.title : ''}
                        className='text-2xl md:text-4xl flex-1 outline-none p-5 w-full font-josefin dark:bg-zinc-800'
                        {...register('title', {
                            required: 'Please enter title',
                        })}
                    />
                </div>
                {errors.title && (
                    <p className='text-red-500 text-sm mb-3 ml-12'>
                        {errors.title.message}
                    </p>
                )}
                <div className='post-content my-8'>
                    <ContentEditor content={content} setContent={setContent} />
                </div>

                <div className='mt-4'>
                    <label className='text-xl mr-2'>Categories:</label>
                    {categories &&
                        categories.map(category => (
                            <span key={category._id}>
                                <label
                                    htmlFor={category.name}
                                    className={`border-2 inline-block mx-1.5 my-0.5 px-3 py-1 rounded-xl cursor-pointer transition-all ${
                                        watch(
                                            'categories',
                                            updateMode && post.categories
                                        ) &&
                                        watch(
                                            'categories',
                                            updateMode && post.categories
                                        ).includes(category.name) &&
                                        'bg-sky-50 border-sky-500 dark:bg-sky-900 dark:border-sky-300'
                                    }`}
                                >
                                    {category.name}
                                </label>
                                <input
                                    type='checkbox'
                                    value={category.name}
                                    id={category.name}
                                    defaultChecked={
                                        updateMode
                                            ? post.categories.includes(
                                                  category.name
                                              )
                                            : false
                                    }
                                    className='hidden'
                                    {...register('categories')}
                                />
                            </span>
                        ))}
                </div>
                {!updateMode ? (
                    <Button customStyles='static mx-auto mt-4 px-10 md:mt-0 md:px-4 md:fixed z-10 right-8 bottom-8'>
                        Publish
                    </Button>
                ) : (
                    <Button
                        customStyles='static mx-auto mt-4 px-10 md:mt-0 md:px-4 md:fixed z-10 right-8 bottom-8'
                        disabled={!isDirty && content === post.content}
                    >
                        Update
                    </Button>
                )}
            </form>
        </div>
    ) : (
        <div className='h-[calc(100vh-50px)]'>
            <Spinner />
        </div>
    )
}
export default Write
