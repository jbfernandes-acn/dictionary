import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import { removeFavorite } from '../../redux/actions/favorites'


export default function FavoritesList ({ favorite }) {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleRemoveFavorite = (favorite) => {
        dispatch(removeFavorite(favorite))
    }

    return (
        <ListItem
            secondaryAction={
                <IconButton onClick={() => {handleRemoveFavorite(favorite)}}>
                    <DeleteIcon className="trashIcon" fontSize="medium"/>
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense onClick={() => navigate(`/words/${favorite}`)}>
                <ListItemText id={favorite} primary={favorite} />
            </ListItemButton>
        </ListItem>
    )
}