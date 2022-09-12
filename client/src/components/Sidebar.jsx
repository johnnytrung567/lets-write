import { AiOutlineSetting } from 'react-icons/ai'
import { MdLogout, MdLogin, MdClose } from 'react-icons/md'
import { FiUserPlus } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { userSelector } from '../redux/selectors'
import { logoutUser } from '../redux/slices/usersSlice'
import ThemeSwitch from './ThemeSwitch'
import SocialMediaIcons from './SocialMediaIcons'

const Sidebar = ({ isOpen, toggleOpen }) => {
    const user = useSelector(userSelector)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/login')
        toast.info('You are logged out', {
            position: toast.POSITION.TOP_CENTER,
        })
        toggleOpen()
    }

    return (
        <>
            <div
                className={`fixed z-20 top-0 left-0 right-0 bottom-0 bg-black/70 dark:bg-black/80 ${
                    !isOpen ? 'hidden' : ''
                }`}
                onClick={toggleOpen}
            ></div>
            <aside
                className={`fixed font-josefin text-gray-700 dark:text-gray-300 z-30 top-0 bottom-0 w-64 bg-white/95 dark:bg-black/90 transition-all duration-300 ${
                    isOpen ? 'left-0' : '-left-full'
                }`}
            >
                <div className='flex flex-col'>
                    <div className='ml-auto p-3 ' onClick={toggleOpen}>
                        <MdClose size={20} />
                    </div>
                    <ul className='mt-3  text-lg font-light uppercase'>
                        <li className=''>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'px-3 py-1 block w-full bg-gray-20   0 dark:bg-gray-800 transition-all duration-300'
                                        : 'px-3 py-1 block w-full'
                                }
                                onClick={toggleOpen}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'px-3 py-1 block w-full bg-gray-200 dark:bg-gray-800 transition-all duration-300'
                                        : 'px-3 py-1 block w-full'
                                }
                                onClick={toggleOpen}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'px-3 py-1 block w-full bg-gray-200 dark:bg-gray-800 transition-all duration-300'
                                        : 'px-3 py-1 block w-full'
                                }
                                onClick={toggleOpen}
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li className=''>
                            <NavLink
                                to='/write'
                                className={({ isActive }) =>
                                    isActive
                                        ? 'px-3 py-1 block w-full bg-gray-200 dark:bg-gray-800 transition-all duration-300'
                                        : 'px-3 py-1 block w-full'
                                }
                                onClick={toggleOpen}
                            >
                                Write
                            </NavLink>
                        </li>
                    </ul>
                    <div className='mt-3 px-3'>
                        {user ? (
                            <>
                                <Link
                                    to='/settings'
                                    className='flex items-center py-1'
                                    onClick={toggleOpen}
                                >
                                    <AiOutlineSetting />
                                    <span className='ml-3'>Settings</span>
                                </Link>
                                <button
                                    className='py-1 flex items-center'
                                    onClick={handleLogout}
                                >
                                    <MdLogout />
                                    <span className='ml-3'>Logout </span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to='/login'
                                    className='flex items-center py-1'
                                    onClick={toggleOpen}
                                >
                                    <MdLogin />
                                    <span className='ml-3'>Login</span>
                                </Link>
                                <Link
                                    to='/login'
                                    className='flex items-center py-1'
                                    onClick={toggleOpen}
                                >
                                    <FiUserPlus />
                                    <span className='ml-3'>Register</span>
                                </Link>
                            </>
                        )}
                    </div>
                    <ThemeSwitch customClass='mt-3 mx-3' />
                    <SocialMediaIcons customClass='mt-5 px-3' />
                </div>
            </aside>
        </>
    )
}
export default Sidebar
