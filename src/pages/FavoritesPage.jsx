import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { getFavorites } from '../redux/selectors'
import Container from '@mui/material/Container'

import FavoritesList from '../components/favoritespage/FavoritesList'

export default function FavoritesPage () {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <FavoritesList />
        </Container>
    )
}