import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { searchPost } from '../redux/slices/postsSlice'

const Search = ({ customClass, isShow, toggleShow, searchIconRef }) => {
    const searchRef = useRef(null)
    const searchIconBtnRef = useRef(null)
    const clearIconRef = useRef(null)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        if (isShow) {
            searchRef.current && searchRef.current.focus()
        }
    }, [isShow])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clearSearchInput = () => {
        setSearchValue('')
        dispatch(searchPost(''))
        searchRef.current && searchRef.current.focus()
    }

    const handleSearchChange = e => {
        setSearchValue(e.target.value)
        dispatch(searchPost(e.target.value.trim()))
        navigate('/')
    }

    const handleFormBlur = e => {
        if (
            searchIconRef &&
            e.relatedTarget !== searchIconRef.current &&
            e.relatedTarget !== searchIconBtnRef.current &&
            e.relatedTarget !== clearIconRef.current &&
            isShow
        ) {
            toggleShow()
            setSearchValue('')
            dispatch(searchPost(''))
        }
    }

    return (
        <form
            className={`flex items-center border border-r-0 dark:border-transparent w-64 rounded-md overflow-hidden transition-all ${customClass}`}
        >
            <div className='flex items-center flex-1 bg-white '>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchValue}
                    onChange={handleSearchChange}
                    ref={searchRef}
                    className='py-1 px-2 outline-none dark:text-black w-full'
                    onBlur={handleFormBlur}
                />
                <button
                    className='pr-1 text-gray-300 cursor-pointer'
                    type='button'
                    ref={clearIconRef}
                    onClick={e => e.preventDefault()}
                >
                    {searchValue && (
                        <RiCloseCircleFill onClick={clearSearchInput} />
                    )}
                </button>
            </div>
            <button
                className=' bg-gray-600 text-white p-2 '
                type='button'
                ref={searchIconBtnRef}
            >
                <FiSearch />
            </button>
        </form>
    )
}
export default Search
