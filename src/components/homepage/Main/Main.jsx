import React from 'react'
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'

import Search from '../../common/Search/Search'
import './Main.css'


export default function Main () {
    const navigate = useNavigate()

    const handleSubmitSearch = (searchedWord) => {
        navigate(`/words/${searchedWord}`)
    }

    return (
        <div className="paddingTop centeredChildren">
            <Typography
                component="h2"
                variant="h3"
                className="title"
                align="center"
                gutterBottom
            >
                English Dictionary
            </Typography>
            
            <Search onSubmit={handleSubmitSearch}/>
        </div>
        
    )
}