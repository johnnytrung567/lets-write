import { useDispatch, useSelector } from 'react-redux'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { toggleTheme } from '../redux/slices/themeSlice'
import { themeSelector } from '../redux/selectors'

const ThemeSwitch = ({ customClass = '' }) => {
    const theme = useSelector(themeSelector)

    const dispatch = useDispatch()

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <div
            className={`w-14 h-7 bg-gray-500 dark:bg-gray-300 rounded-full relative cursor-pointer ${customClass}`}
            onClick={handleToggleTheme}
        >
            <div
                className={`${
                    theme === 'dark'
                        ? 'left-[95%] -translate-x-full'
                        : 'left-0.5 translate-x-0'
                } absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full transition-all duration-300 bg-white flex items-center justify-center`}
            >
                {theme === 'dark' ? (
                    <RiMoonFill className='text-purple-500' />
                ) : (
                    <RiSunFill className='text-yellow-500' />
                )}
            </div>
        </div>
    )
}
export default ThemeSwitch
