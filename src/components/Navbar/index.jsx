import React from "react"

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Navbar () {
    return (
        <AppBar
            position="static"
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuBookIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                Dictionary
            </Typography>
            <Tooltip title="Favorites">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ my: 1, mx: 1.5 }}>
                    <FavoriteBorderIcon />
                </IconButton>
            </Tooltip>
            </Toolbar>
        </AppBar>
    );
}