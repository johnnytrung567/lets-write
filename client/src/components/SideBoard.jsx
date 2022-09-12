import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    categoriesSelector,
    categoriesLoadingSelector,
    postsSelector,
    postLoadingSelector,
} from '../redux/selectors'
import { fetchCategories } from '../redux/slices/categoriesSlice'
import defaultPostPhoto from '../assets/images/default-post-photo.png'
import { useState } from 'react'
import SocialMediaIcons from './SocialMediaIcons'

const SideBoard = () => {
    const categories = useSelector(categoriesSelector)
    const catLoading = useSelector(categoriesLoadingSelector)
    const posts = useSelector(postsSelector)
    const postLoading = useSelector(postLoadingSelector)

    const [random, setRandom] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        if (posts.length > 0)
            setRandom(Math.floor(Math.random() * posts.length))
    }, [posts.length])

    return (
        <aside className='w-full lg:w-1/3 px-5 py-8'>
            <div className='pb-7 bg-[#fdfbfb] dark:bg-[#766969] rounded-lg flex flex-wrap justify-center items-start'>
                <div className='flex flex-col items-center w-full p-7 pt-0 sm:w-1/2 lg:w-full'>
                    <p className='m-2.5 p-1.5 w-4/5 border-y uppercase text-xs text-gray-800 dark:text-gray-300 text-center font-semibold font-varelaRound'>
                        Random post
                    </p>
                    {postLoading && <RandomPostSkeleton />}
                    {posts.length > 0 && !postLoading && random !== null && (
                        <>
                            {' '}
                            <Link
                                to={`/post/${posts[random]._id}`}
                                className='block w-full'
                            >
                                <img
                                    src={
                                        posts[random].photo.url
                                            ? posts[random].photo.url
                                            : defaultPostPhoto
                                    }
                                    alt=''
                                    className='mt-4 rounded-lg w-full max-h-64 object-cover'
                                />
                            </Link>
                            <h3 className='font-bold text-xl mt-3 w-full text-center truncate'>
                                <Link to={`/post/${posts[random]._id}`}>
                                    {posts[random].title}
                                </Link>
                            </h3>
                            <p
                                className='mt-2 preview-content post-content'
                                dangerouslySetInnerHTML={{
                                    __html: posts[random].content,
                                }}
                            ></p>
                        </>
                    )}
                    {posts.length <= 0 && !postLoading && (
                        <h3 className='font-josefin text-xl'>
                            No posts to show
                        </h3>
                    )}
                </div>
                <div className='sm:w-1/2 lg:w-full'>
                    <div className='flex flex-col items-center min-w-[80%]'>
                        <p className='m-2.5 p-1.5 w-4/5 border-y uppercase text-xs text-gray-800 dark:text-gray-300 text-center font-semibold font-varelaRound'>
                            Categories
                        </p>
                        <ul className='mb-7 w-4/5'>
                            {categories &&
                                !catLoading &&
                                categories.map((category, index) => (
                                    <li
                                        key={index}
                                        className='inline-block w-1/2 mt-4 text-center cursor-pointer'
                                    >
                                        <Link to={`/?cat=${category.name}`}>
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className='flex flex-col items-center min-w-[80%]'>
                        <p className='m-2.5 p-1.5 w-4/5 border-y uppercase text-xs text-gray-800 dark:text-gray-300 text-center font-semibold font-varelaRound'>
                            Follow us
                        </p>
                        <SocialMediaIcons customClass='text-lg' />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export const RandomPostSkeleton = () => {
    return (
        <>
            <div className='mt-4 w-full h-64 rounded-lg animate-pulse bg-gray-200 dark:bg-gray-700'></div>
            <div className='mt-3 w-full h-7 animate-pulse bg-gray-200 dark:bg-gray-700'></div>
            <div className='mt-2 w-full h-24 animate-pulse bg-gray-200 dark:bg-gray-700'></div>
        </>
    )
}

export default SideBoard
