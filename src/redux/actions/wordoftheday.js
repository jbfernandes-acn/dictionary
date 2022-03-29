import { START_WORD_OF_THE_DAY_REQUEST, END_WORD_OF_THE_DAY_REQUEST } from '../actionTypes'
import axios from 'axios'


const startWordOfTheDayRequest = () => ({
    type: START_WORD_OF_THE_DAY_REQUEST
})

const endWordOfTheDayRequest = (wordOfTheDay) => ({
    type: END_WORD_OF_THE_DAY_REQUEST,
    wordOfTheDay: wordOfTheDay
})

export const getWordOfTheDayFromAPI = () => {
    return dispatch => {
        dispatch(startWordOfTheDayRequest());
        return axios.get(`https://random-word-api.herokuapp.com/word?number=1`)
            .then(response => dispatch(endWordOfTheDayRequest(response.data[0])))
            .catch(error => {
                dispatch(endWordOfTheDayRequest(null))
            });
    };
}
