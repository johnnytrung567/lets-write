import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin2Fill } from 'react-icons/ri'

const SinglePost = () => {
    return (
        <div className='w-2/3 px-5 py-8'>
            <img
                src='https://images.unsplash.com/photo-1657664042482-a6e53c1b03a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt=''
                className='w-full h-80 rounded-lg object-cover'
            />
            <div className='flex justify-center items-center'>
                <h1 className='mx-auto mt-6 mb-3 text-4xl font-josefin font-bold'>
                    Lorem ipsum dolor sit amet.
                </h1>
                <div className='flex text-lg'>
                    <FaEdit className='text-teal-700 cursor-pointer' />
                    <RiDeleteBin2Fill className='ml-2.5 text-rose-700 cursor-pointer' />
                </div>
            </div>
            <div className='flex justify-between mb-5 font-lora text-amber-700'>
                <span>
                    Author: <span className='font-bold'>Trung</span>
                </span>
                <span>1 hour ago</span>
            </div>
            <p className='font-varelaRound text-gray-700 dark:text-gray-300 text-lg leading-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                magnam expedita error ut doloremque sit, culpa temporibus fugit?
                Consequatur omnis amet perferendis natus error sapiente commodi
                explicabo dolorem possimus quae! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Omnis magnam expedita error ut
                doloremque sit, culpa temporibus fugit? Consequatur omnis amet
                perferendis natus error sapiente commodi explicabo dolorem
                possimus quae! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Omnis magnam expedita error ut doloremque sit,
                culpa temporibus fugit? Consequatur omnis amet perferendis natus
                error sapiente commodi explicabo dolorem possimus quae! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam
                expedita error ut doloremque sit, culpa temporibus fugit?
                Consequatur omnis amet perferendis natus error sapiente commodi
                explicabo dolorem possimus quae!
            </p>
            <div className='text-sky-500 text-sm mt-5 font-varelaRound'>
                <span className='mr-3 cursor-pointer before:content-["#"]'>
                    Life
                </span>
                <span className='mr-3 cursor-pointer before:content-["#"]'>
                    Music
                </span>
            </div>
        </div>
    )
}
export default SinglePost
