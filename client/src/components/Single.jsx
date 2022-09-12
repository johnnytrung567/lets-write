import { useEffect } from 'react'
import SideBoard from './SideBoard'
import SinglePost from './SinglePost'

const Single = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='flex flex-wrap mt-10'>
            <SinglePost />
            <SideBoard />
        </div>
    )
}
export default Single
