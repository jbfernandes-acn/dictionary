import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

import Chip from '@mui/material/Chip'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Definition from '../Definition/Definition'

import { getWordFromAPI } from '../../../redux/actions/word'
import { addFavorite, removeFavorite } from '../../../redux/actions/favorites'
import { getWord, isWordLoading, checkIsFavorite } from '../../../redux/selectors'
import { playWordSound } from '../../../resources/helpers'

export default function Meaning ({ meaning }) {

    const navigate = useNavigate()

    return (
        <div className="partOfSpeech">
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                >
                <Typography>{meaning.partOfSpeech}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        meaning.synonyms.map((synonym, index) => 
                            <Chip key={index} label={synonym} className="synonym" onClick={() => navigate(`/words/${synonym}`)}/>
                        )
                    }
                    {
                        meaning.definitions.map((definition, index) => 
                            <Definition key={index} definition={definition} index={index}/>
                        )
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    )
}