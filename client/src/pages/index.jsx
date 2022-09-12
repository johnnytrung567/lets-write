import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import SideBoard from '../components/SideBoard'
import Posts from '../components/Posts'
import {
    fetchPosts,
    filterPostByCat,
    filterPostByUser,
} from '../redux/slices/postsSlice'

const Home = () => {
    // const { search } = useLocation()
    const [search] = useSearchParams()
    // console.log(Object.fromEntries([...searchParams]))

    const dispatch = useDispatch()
    useEffect(() => {
        const { cat, user } = Object.fromEntries([...search])
        dispatch(fetchPosts())
        dispatch(filterPostByCat(cat))
        dispatch(filterPostByUser(user))
    }, [search])
    return (
        <>
            <Header />
            <div className='flex flex-wrap items-start'>
                <Posts />
                <SideBoard />
            </div>
        </>
    )
}
export default Home
