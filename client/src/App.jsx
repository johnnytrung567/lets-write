import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Single from './components/Single'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import Home from './pages'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Write from './pages/Write'
import AuthRoute from './routes/AuthRoute'
import ProtectedRoute from './routes/ProtectedRoute'
import { loadUser } from './redux/slices/usersSlice'
import { loadTheme } from './redux/slices/themeSlice'
import { useState } from 'react'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
    AOS.init({
        duration: 1200,
        once: true,
    })

    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const toggleSidebarOpen = () => setSidebarOpen(!isSidebarOpen)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
        dispatch(loadTheme())
    }, [])

    return (
        <BrowserRouter>
            <div className='dark:bg-zinc-800 dark:text-gray-100'>
                <TopBar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebarOpen={toggleSidebarOpen}
                />
                <Sidebar
                    isOpen={isSidebarOpen}
                    toggleOpen={toggleSidebarOpen}
                />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/post/:id' element={<Single />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />

                    <Route element={<AuthRoute />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<ProtectedRoute />}>
                        <Route path='/write' element={<Write />} />
                        <Route path='/settings' element={<Settings />} />
                    </Route>
                </Routes>
                <ToastContainer />
            </div>
        </BrowserRouter>
    )
}

export default App
