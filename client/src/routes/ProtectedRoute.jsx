import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { userLoadingSelector, userSelector } from '../redux/selectors'

const ProtectedRoute = () => {
    const user = useSelector(userSelector)
    const loading = useSelector(userLoadingSelector)

    if (loading) return <Spinner />
    else if (user) return <Outlet />
    else if (!user) {
        toast.info('You need to login to use this feature', {
            position: toast.POSITION.TOP_CENTER,
        })
        return <Navigate to='/login' />
    }
}
export default ProtectedRoute
