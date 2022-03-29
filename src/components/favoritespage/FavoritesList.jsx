import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

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
                                <ListItem
                                    key={favorite}
                                    secondaryAction={
                                        <IconButton onClick={() => {handleRemoveFavorite(favorite)}}>
                                            <DeleteIcon fontSize="medium"/>
                                        </IconButton>
                                    }
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} dense onClick={() => navigate(`/words/${favorite}`)}>
                                    {/*
                                    <ListItemIcon>
                                        <IconButton edge="start" color="inherit" aria-label="menu">
                                            <VolumeUpIcon />
                                        </IconButton>
                                    </ListItemIcon>
                                    */}
                                    <ListItemText id={favorite} primary={favorite} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        }
                        </List>
                </div>
            }
        </>
    )
}