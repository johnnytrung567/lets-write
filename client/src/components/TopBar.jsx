import { useState } from 'react'
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaPinterestSquare,
} from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

const TopBar = () => {
    const [isDarkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => setDarkMode(!isDarkMode)

    return (
        <div className='h-[50px] w-full sticky px-3 top-0 z-20 bg-white dark:bg-zinc-800'>
            <div className='flex max-w-7xl mx-auto h-full items-center'>
                <div className='w-1/4 flex items-center text-xl text-gray-700 dark:text-gray-300'>
                    <a target='_blank' href='https://www.facebook.com/'>
                        <FaFacebookSquare className='mr-2.5' />
                    </a>
                    <a target='_blank' href='https://www.twitter.com/'>
                        <FaTwitterSquare className='mr-2.5' />
                    </a>
                    <a target='_blank' href='https://www.instagram.com/'>
                        <FaInstagramSquare className='mr-2.5' />
                    </a>
                    <a target='_blank' href='https://www.pinterest.com/'>
                        <FaPinterestSquare />
                    </a>
                    <div
                        className='ml-4 w-14 h-7 bg-gray-500 dark:bg-gray-300 rounded-full relative cursor-pointer'
                        onClick={toggleDarkMode}
                    >
                        <div
                            className={`${
                                isDarkMode
                                    ? 'left-[95%] -translate-x-full'
                                    : 'left-0.5 translate-x-0'
                            } absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full transition-all duration-300 bg-white flex items-center justify-center`}
                        >
                            {isDarkMode ? (
                                <RiMoonFill className='text-purple-500' />
                            ) : (
                                <RiSunFill className='text-yellow-500' />
                            )}
                        </div>
                    </div>
                </div>
                <nav className='w-1/2 font-josefin text-lg font-light uppercase'>
                    <ul className='flex justify-center'>
                        <li className='mx-2.5'>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b border-black dark:border-white'
                                        : 'transition-all hover:border-b'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='mx-2.5'>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b border-black dark:border-white'
                                        : 'transition-all hover:border-b'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li className='mx-2.5'>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b border-black dark:border-white'
                                        : 'transition-all hover:border-b'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className='mx-2.5'>
                            <NavLink
                                to='/write'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b border-black dark:border-white'
                                        : 'transition-all hover:border-b'
                                }
                            >
                                Write
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='w1/4 flex items-center ml-auto'>
                    <FiSearch
                        size={18}
                        className='text-gray-600 dark:text-gray-300 mr-4 cursor-pointer'
                    />
                    {/* <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer'>
                        <img
                            src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                            alt=''
                        />
                    </div> */}
                    <div className='font-josefin text-gray-700 dark:text-gray-300'>
                        <Link
                            to='/login'
                            className='transition-all hover:text-sky-500'
                        >
                            Login
                        </Link>
                        <Link
                            to='/register'
                            className='ml-4 border rounded-xl p-2 transition-all hover:bg-gray-700 hover:border-gray-700 hover:text-white dark:hover:bg-gray-500 dark:hover:border-gray-500'
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar
