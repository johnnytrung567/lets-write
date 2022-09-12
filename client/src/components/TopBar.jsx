import { FiSearch } from 'react-icons/fi'
import { MdMenu } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userSelector } from '../redux/selectors'
import { logoutUser } from '../redux/slices/usersSlice'
import SocialMediaIcons from './SocialMediaIcons'
import ThemeSwitch from './ThemeSwitch'
import Search from './Search'
import { useState } from 'react'
import { useRef } from 'react'

const TopBar = ({ isSidebarOpen, toggleSidebarOpen }) => {
    const user = useSelector(userSelector)

    const [isSearchShow, setSearchShow] = useState(false)
    const toggleSearchShow = () => {
        setSearchShow(!isSearchShow)
    }
    const searchIconRef = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/login')
        toast.info('You are logged out', {
            position: toast.POSITION.TOP_CENTER,
        })
    }

    return (
        <div className='h-[50px] w-full sticky px-3 top-0 z-20 bg-white dark:bg-zinc-800'>
            <div className='flex max-w-7xl mx-auto h-full items-center'>
                <div className='hidden w-1/4 lg:flex items-center'>
                    <SocialMediaIcons />
                    <ThemeSwitch customClass='ml-4' />
                </div>
                <div
                    className={`text-gray-700 dark:text-gray-300 lg:hidden cursor-pointer ${
                        isSidebarOpen ? 'opacity-0' : ''
                    }`}
                    onClick={() => !isSearchShow && toggleSidebarOpen()}
                >
                    <MdMenu size={24} />
                </div>
                <div className='md:w-1/2 mx-auto flex justify-center lg:hidden'>
                    <Search customClass='md:w-72' />
                </div>
                <nav className='w-1/2 font-josefin text-lg font-light uppercase hidden lg:block'>
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
                <div className='hidden w1/4 md:flex items-center ml-auto'>
                    <div className='text-gray-600 dark:text-gray-300 mr-4 cursor-pointer relative hidden lg:block'>
                        <button
                            className='flex items-center'
                            ref={searchIconRef}
                            onClick={toggleSearchShow}
                        >
                            <FiSearch size={18} />
                        </button>
                        <Search
                            customClass={`absolute right-0 top-[130%] lg:w-72 ${
                                isSearchShow
                                    ? 'h-8'
                                    : 'h-0 border-none opacity-0'
                            }`}
                            isShow={isSearchShow}
                            toggleShow={toggleSearchShow}
                            searchIconRef={searchIconRef}
                        />
                    </div>
                    {user ? (
                        <>
                            <Link to='/settings'>
                                <img
                                    src={user.profilePic.url}
                                    alt='Profile picture'
                                    className='w-10 h-10 rounded-full overflow-hidden object-cover cursor-pointer'
                                />
                            </Link>
                            <button
                                className='ml-4 border rounded-xl p-2 transition-all hover:bg-gray-700 hover:border-gray-700 hover:text-white dark:hover:bg-gray-500 dark:hover:border-gray-500'
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
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
                    )}
                </div>
            </div>
        </div>
    )
}
export default TopBar
