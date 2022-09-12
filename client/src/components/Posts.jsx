import { useSelector } from 'react-redux'
import { postLoadingSelector, postsFilteredSelector } from '../redux/selectors'
import Pagination from './Pagination'
import Post, { PostSkeleton } from './Post'

const Posts = () => {
    const posts = useSelector(postsFilteredSelector)
    const loading = useSelector(postLoadingSelector)

    return (
        <div className='w-full lg:w-2/3 flex flex-wrap'>
            <Pagination items={posts} itemsPerPage={6} />
        </div>
    )
}
export default Posts
