import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import Post, { PostSkeleton } from './Post'
import { postLoadingSelector } from '../redux/selectors'

function Items({ currentItems }) {
    const loading = useSelector(postLoadingSelector)

    return (
        <>
            {loading &&
                new Array(2)
                    .fill(0)
                    .map((item, index) => <PostSkeleton key={index} />)}
            {currentItems &&
                !loading &&
                currentItems.map(post => <Post key={post._id} post={post} />)}
            {!currentItems && !loading && (
                <h3 className='w-full text-center mt-14 text-3xl font-josefin font-bold'>
                    No posts to show
                </h3>
            )}
        </>
    )
}

const Pagination = ({ items, itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage
        setCurrentItems(items.length > 0 && items.slice(itemOffset, endOffset))
        setPageCount(Math.ceil(items.length > 0 && items.length / itemsPerPage))
    }, [items, itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = event => {
        const newOffset = (event.selected * itemsPerPage) % items.length
        setItemOffset(newOffset)
    }

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel='...'
                nextLabel='next >'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel='< previous'
                renderOnZeroPageCount={null}
                className='w-full m-2 md:mb-10 flex flex-wrap justify-center items-center'
                pageClassName='mx-2 transition-all hover:border-b'
                breakClassName='mx-2'
                activeClassName='border-b border-current'
                previousClassName='mr-2 rounded-md p-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all '
                nextClassName='ml-2 rounded-md p-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all '
            />
        </>
    )
}
export default Pagination
