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

import { getWordFromAPI } from '../../../redux/actions/word'
import { addFavorite, removeFavorite } from '../../../redux/actions/favorites'
import { getWord, isWordLoading, checkIsFavorite } from '../../../redux/selectors'

export default function WordDetailPage () {

    const navigate = useNavigate()

    const word = useParams().word
    const dispatch = useDispatch()

    let isLoading = useSelector(isWordLoading)
    let wordInfo = useSelector(getWord)
    let isFavoriteWord = useSelector(checkIsFavorite(word))

    useEffect(() => {
        dispatch(getWordFromAPI(word));
    }, [dispatch, word])

    const toggleFavorite = () => {
        if (isFavoriteWord) {
            dispatch(removeFavorite(word))
        } else {
            dispatch(addFavorite(word))
        }
    }

    const playWordSound = () => {
        var synth = window.speechSynthesis;
        var text = new SpeechSynthesisUtterance(word);
        synth.speak(text);
    }

    console.log(wordInfo);

    return (
        <>
            {
                isLoading || !wordInfo ? 
                <CircularProgress /> :
                wordInfo === null ?
                'Not found' :
                <>
                    <IconButton onClick={playWordSound} edge="start" color="inherit" aria-label="menu">
                        <VolumeUpIcon />
                    </IconButton>
                    <h2>{wordInfo.word}</h2>
                    <p>{wordInfo.phonetic}</p>
                    <IconButton onClick={toggleFavorite} edge="start" color="inherit" aria-label="menu">
                        {
                            isFavoriteWord ?
                            <FavoriteIcon /> :
                            <FavoriteBorderIcon />
                        }
                    </IconButton>
                    {
                        wordInfo.meanings.map(meaning => 
                            <div key={meaning.partOfSpeech} className="partOfSpeech">
                                <Accordion defaultExpanded={true}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    >
                                    <Typography>{meaning.partOfSpeech}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {
                                            meaning.synonyms.map((synonym, index) => 
                                                <Chip label={synonym} className="synonym" onClick={() => navigate(`/words/${synonym}`)}/>
                                            )
                                        }
                                        {
                                            meaning.definitions.map((definition, index) => 
                                                <div key={index}>
                                                    <h5>{`${index + 1}. ${definition.definition}`}</h5>
                                                    { definition.example && <p>"{definition.example}"</p> }
                                                </div>
                                            )
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    }

                    <br/><br/><br/>
                    <p>{JSON.stringify(wordInfo)}</p>
                </>
            }
        </>
    )
}