import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { userSelector } from '../redux/selectors'

const ProtectedRoute = () => {
    const user = useSelector(userSelector)
    if (user) return <Navigate to={-1} />

    return <Outlet />
}
export default ProtectedRoute
