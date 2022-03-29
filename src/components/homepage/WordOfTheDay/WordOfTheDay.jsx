import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import { getWordOfTheDayFromAPI } from '../../../redux/actions/wordoftheday'
import { getWordOfTheDay, isWordOfTheDayLoading } from '../../../redux/selectors'

export default function WordOfTheDay () {
    const wordOfTheDay = useSelector(getWordOfTheDay)
    const isLoading = useSelector(isWordOfTheDayLoading)

    const dispatch = useDispatch()

    useEffect(() => {
      if (!wordOfTheDay) {
        dispatch(getWordOfTheDayFromAPI())
      }
    }, [dispatch])

    return (
      <div className="paddingTop centeredChildren">
          <Typography
            component="h6"
            variant="h6"
            align="left"
            gutterBottom
            color="#095097"
          >
              Word of the day
          </Typography>
          {
            isLoading ?
            <CircularProgress /> :
            <Typography
              component="h5"
              variant="h5"
              align="left"
              gutterBottom
              className="wordOfTheDay"
            >
              {wordOfTheDay}
            </Typography>
          }
      </div>
    );
}
