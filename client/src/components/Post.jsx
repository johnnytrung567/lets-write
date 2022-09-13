import { Link } from 'react-router-dom'
import defaultPostPhoto from '../assets/images/default-post-photo.png'

const Post = ({ post }) => {
    return (
        <div className='w-full sm:w-1/2 px-5 py-8 flex flex-col items-center'>
            <Link to={`/post/${post._id}`} className='block w-full'>
                <img
                    src={post.photo.url ? post.photo.url : defaultPostPhoto}
                    alt={post.title}
                    className='rounded-lg w-full h-72 object-cover cursor-pointer mb-4'
                />
            </Link>
            <div className='flex-1'>
                <div className='text-sky-500 text-xs font-varelaRound mb-4 flex flex-wrap justify-center'>
                    {post.categories.map(
                        (category, index) =>
                            category && (
                                <span
                                    key={index}
                                    className='mx-1.5 cursor-pointer before:content-["#"]'
                                >
                                    <Link to={`/?cat=${category}`}>
                                        {category}
                                    </Link>
                                </span>
                            )
                    )}
                </div>
                <h3 className='text-2xl font-bold font-josefin cursor-pointer mb-4 mt-auto'>
                    <Link to={`/post/${post._id}`}>{post.title}</Link>
                </h3>
            </div>
            <span className='text-gray-400 italic font-lora text-sm'>
                {new Date(post.createdAt).toDateString()}
            </span>
            <p
                className='post-content flex-auto sm:flex-1 mr-auto mt-4 font-varelaRound text-gray-700 dark:text-gray-300 leading-7 max-h-28 preview-content'
                dangerouslySetInnerHTML={{ __html: post.content }}
            ></p>
        </div>
    )
}

export const PostSkeleton = () => {
    return (
        <div className='w-full sm:w-1/2 px-5 py-8 animate-pulse'>
            <div className='rounded-lg w-full h-72 bg-gray-200 dark:bg-gray-700'></div>
            <div className='flex flex-col items-center'>
                <div className='mt-4 h-3 w-20 bg-gray-200 dark:bg-gray-700'></div>
                <div className='mt-4 h-7 w-60 bg-gray-200 dark:bg-gray-700'></div>
                <div className='mt-4 h-4 w-28 bg-gray-200 dark:bg-gray-700'></div>
            </div>
            <div className='mt-4 h-40 w-full bg-gray-200 dark:bg-gray-700'></div>
        </div>
    )
}

export default Post
