import React from 'react'
import Container from '@mui/material/Container'

import WordDetail from '../components/worddetailpage/WordDetail/WordDetail'

export default function WordDetailPage () {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <WordDetail />
        </Container>
    )
}