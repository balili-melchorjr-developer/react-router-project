import {Route, Routes} from 'react-router-dom'

//Components
import HomePage from './components/HomePage'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
    )
}

export default AppRoutes