import { useEffect } from 'react'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import {
    currentPostSelector,
    postLoadingSelector,
    userSelector,
} from '../redux/selectors'
import {
    deletePost,
    fetchPostById,
    setUpdateMode,
} from '../redux/slices/postsSlice'
import defaultPostPhoto from '../assets/images/default-post-photo.png'
import ModalConfirmDelete from './ModalConfirmDelete'
import { toggleModalShow } from '../redux/slices/themeSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const SinglePost = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const user = useSelector(userSelector)
    const post = useSelector(currentPostSelector)
    const loading = useSelector(postLoadingSelector)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchPostById(id))
    }, [id])

    const handleDelete = async () => {
        const resultAction = await dispatch(deletePost(post._id))
        const result = unwrapResult(resultAction)
        if (result.success) {
            toast.success(result.message)
            navigate('/', { replace: true })
        } else {
            toast.error(result.message)
        }
    }

    const handleEditClick = () => {
        dispatch(setUpdateMode(true))
        navigate('/write')
    }

    return post && !loading ? (
        <div className='w-full lg:w-2/3 px-5 py-8'>
            <img
                src={post.photo.url ? post.photo.url : defaultPostPhoto}
                alt={post.title}
                className='w-full h-80 rounded-lg object-cover'
            />
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
                <h1 className='mx-auto mt-6 mb-3 text-4xl font-josefin font-bold'>
                    {post.title}
                </h1>
                {post.user.username === user.username && (
                    <div className='flex text-lg mb-2 md:mb-0 md:ml-4'>
                        <FaEdit
                            className='text-teal-700 cursor-pointer'
                            onClick={handleEditClick}
                        />
                        <RiDeleteBin2Fill
                            className='ml-2.5 text-rose-700 cursor-pointer'
                            onClick={() => dispatch(toggleModalShow())}
                        />
                    </div>
                )}
            </div>
            <ModalConfirmDelete
                message='Are you sure you want to delete this post?'
                onDelete={handleDelete}
            />
            <div className='flex flex-wrap-reverse justify-between mb-4 font-lora text-amber-700'>
                <span className='mb-1'>
                    Author:{' '}
                    <span className='font-bold'>
                        <Link to={`/?user=${post.user.username}`}>
                            {post.user.username}
                        </Link>
                    </span>
                </span>
                <span className='mb-1'>
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p
                className='post-content font-varelaRound text-gray-700 dark:text-gray-300 text-lg leading-7'
                dangerouslySetInnerHTML={{ __html: post.content }}
            ></p>
            <div className='text-sky-500 text-sm mt-5 font-varelaRound flex flex-wrap'>
                {post.categories.map(
                    (category, index) =>
                        category && (
                            <span
                                key={index}
                                className='mr-3 cursor-pointer before:content-["#"]'
                            >
                                <Link to={`/?cat=${category}`}>{category}</Link>
                            </span>
                        )
                )}
            </div>
        </div>
    ) : (
        <SinglePostSkeleton />
    )
}

const SinglePostSkeleton = () => {
    return (
        <div className='w-full lg:w-2/3 px-5 py-8 animate-pulse'>
            <div className='w-full h-80 rounded-lg bg-gray-200 dark:bg-gray-700'></div>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center'>
                <div className='mx-auto mt-6 mb-3 h-8 w-72 bg-gray-200 dark:bg-gray-700'></div>
                <div className='flex w-full justify-center md:w-auto md:justify-end mb-2 md:mb-0 md:ml-4'>
                    <div className='h-5 w-5 bg-gray-200 dark:bg-gray-700'></div>
                    <div className='ml-2.5 h-5 w-5 bg-gray-200 dark:bg-gray-700'></div>
                </div>
            </div>
            <div className='flex justify-between mb-5'>
                <div className='h-4 w-32 bg-gray-200 dark:bg-gray-700'></div>
                <div className='h-4 w-32 bg-gray-200 dark:bg-gray-700'></div>
            </div>
            <div className='w-full h-60 bg-gray-200 dark:bg-gray-700'></div>
            <div className='mt-5 h-3 w-40 bg-gray-200 dark:bg-gray-700'></div>
        </div>
    )
}

export default SinglePost
