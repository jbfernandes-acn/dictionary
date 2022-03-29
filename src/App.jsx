import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar/Navbar'
import HomePage from './pages/HomePage'
import WordDetailPage from './pages/WordDetailPage'
import FavoritesPage from './pages/FavoritesPage'
import { retrieveFavoritesFromLocalStorage } from './redux/actions/favorites'


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(retrieveFavoritesFromLocalStorage())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="words/:word" element={<WordDetailPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
            </Routes>
        </>
    );
}

export default App;
