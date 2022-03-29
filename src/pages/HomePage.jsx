import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from '@mui/material/Container'

import Main from '../components/homepage/Main/Main'
import WordOfTheDay from '../components/homepage/WordOfTheDay/WordOfTheDay'

export default function HomePage () {

    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Main />
            <WordOfTheDay />
        </Container>
    )
}