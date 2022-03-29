import { START_WORD_REQUEST, END_WORD_REQUEST } from '../actionTypes'
import axios from 'axios'


const startWordRequest = () => ({
    type: START_WORD_REQUEST
})

const endWordRequest = (word, notFound = false) => ({
    type: END_WORD_REQUEST,
    word: word
})

export const getWordFromAPI = (word) => {
    return dispatch => {
        dispatch(startWordRequest());
        return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => dispatch(endWordRequest(response.data[0])))
            .catch(error => {
                dispatch(endWordRequest(null, true))
            });
    };
}

