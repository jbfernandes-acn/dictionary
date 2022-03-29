import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

import Favorite from './Favorite'
import { areFavoritesLoading, getFavorites } from '../../redux/selectors'
import { removeFavorite } from '../../redux/actions/favorites'


export default function FavoritesList () {

    const navigate = useNavigate()

    const [sortAscending, setSortAscending] = useState(true)
    const dispatch = useDispatch()

    let favorites = useSelector(getFavorites(sortAscending))
    let isLoading = useSelector(areFavoritesLoading)

    const handleRemoveFavorite = (favorite) => {
        dispatch(removeFavorite(favorite))
    }

    const toggleSortOrder = () => {
        setSortAscending(previousSortAscending => !previousSortAscending)
    }

    return (
        <>
            {
                isLoading || !favorites ?
                <CircularProgress /> :
                <div className="centeredChildren">
                    <h2>Favorites <span className="favoritesLength">({favorites.length})</span></h2>
                    <div>
                    <IconButton onClick={toggleSortOrder}>
                        <SortByAlphaIcon />
                    </IconButton>
                    </div>
                    <List sx={{ width: '50%' }} className="favoritesList">
                        {
                            favorites.map(favorite =>
                                <Favorite key={favorite} favorite={favorite} />
                            )
                        }
                        </List>
                </div>
            }
        </>
    )
}