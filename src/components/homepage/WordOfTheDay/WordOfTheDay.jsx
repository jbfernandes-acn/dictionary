import React, {useState, useEffect} from 'react'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

export default function WordOfTheDay () {
    const [isLoading, setIsLoading] = useState(true)
    const [wordOfTheDay, setWordOfTheDay] = useState('')

    useEffect(() => {
        fetch('https://random-word-api.herokuapp.com/word?number=1')
            .then(response => response.json())
            .then(words => {
                setWordOfTheDay(words[0])
                setIsLoading(false)
            })
    }, [])

    return (
      <div className="paddingTop centeredChildren">
          <Typography
            component="h6"
            variant="h6"
            align="left"
            gutterBottom
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
            >
              {wordOfTheDay}
            </Typography>
          }
      </div>
    );
}
