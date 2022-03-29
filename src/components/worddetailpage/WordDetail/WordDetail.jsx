import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import CircularProgress from '@mui/material/CircularProgress'
import Chip from '@mui/material/Chip'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Meaning from '../Meaning/Meaning'
import { getWordFromAPI } from '../../../redux/actions/word'
import { addFavorite, removeFavorite } from '../../../redux/actions/favorites'
import { getWord, isWordLoading, checkIsFavorite } from '../../../redux/selectors'
import { playWordSound } from '../../../resources/helpers'

export default function WordDetailPage () {

    const word = useParams().word
    const dispatch = useDispatch()

    let isLoading = useSelector(isWordLoading)
    let wordInfo = useSelector(getWord)
    let isFavoriteWord = useSelector(checkIsFavorite(word))

    useEffect(() => {
        dispatch(getWordFromAPI(word))
    }, [dispatch, word])

    const toggleFavorite = () => {
        if (isFavoriteWord) {
            dispatch(removeFavorite(word))
        } else {
            dispatch(addFavorite(word))
        }
    }

    const handlePlaySound = () => {
        playWordSound(word)
    }

    console.log(wordInfo);

    return (
        <>
            {
                isLoading 
                ? 
                <div className="centeredChildren">
                    <CircularProgress size="3rem"/>
                </div> 
                :
                wordInfo === null 
                ?
                <Typography variant="h3" align="center">Word not found</Typography> 
                :
                <>
                    <div className="wordTitle">
                        <h2>{wordInfo.word}</h2>
                        <div className="favoriteIcon" >
                            <IconButton onClick={toggleFavorite} edge="start" color="inherit" aria-label="menu">
                                {
                                    isFavoriteWord ?
                                    <FavoriteIcon/> :
                                    <FavoriteBorderIcon/>
                                }
                            </IconButton>
                        </div>
                    </div>
                        
                    <div style={{display: 'flex'}}>
                        <IconButton onClick={handlePlaySound} edge="start" color="inherit" aria-label="menu">
                            <VolumeUpIcon className="listenIcon"/>
                        </IconButton>
                        <p>{wordInfo.phonetic}</p>
                    </div>
                    
                    {
                        wordInfo.meanings.map(meaning => 
                            <Meaning key={meaning.partOfSpeech} meaning={meaning}/>
                        )
                    }
                </>
            }
        </>
    )
}