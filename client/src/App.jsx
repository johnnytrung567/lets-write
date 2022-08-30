import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Single from './components/Single'
import TopBar from './components/TopBar'
import Home from './pages'
import Login from './pages/Login'
import Register from './pages/Register'
import Settings from './pages/Settings'
import Write from './pages/Write'

function App() {
    return (
        <BrowserRouter>
            <div className='dark:bg-zinc-800 dark:text-gray-100'>
                <TopBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/post/:id' element={<Single />} />
                    <Route path='/write' element={<Write />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
