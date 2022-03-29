import React from "react"
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Navbar () {
    const navigate = useNavigate()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => {navigate('/')}} edge="start" color="inherit" aria-label="menu">
                    <MenuBookIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Dictionary
                </Typography>
                <Tooltip title="Favorites">
                    <IconButton onClick={() => {navigate('/favorites')}} edge="start" color="inherit" aria-label="menu" sx={{ my: 1, mx: 1.5 }}>
                        <FavoriteBorderIcon />
                    </IconButton>
                </Tooltip>
                {/*
                <Typography variant="subtitle1" color="inherit">
                    EN
                </Typography>
                <Typography variant="subtitle1" color="inherit">
                    PT
                </Typography>
                */}
            </Toolbar>
        </AppBar>
    );
}