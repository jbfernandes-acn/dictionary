import { START_WORD_OF_THE_DAY_REQUEST, END_WORD_OF_THE_DAY_REQUEST } from '../actionTypes'


const initialState = {
    wordOfTheDay: null,
    isLoading: true
}


export default function (state = initialState, action) {
    switch (action.type) {
        case START_WORD_OF_THE_DAY_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case END_WORD_OF_THE_DAY_REQUEST:
            return {
                ...state,
                wordOfTheDay: action.wordOfTheDay,
                isLoading: false
            }
        default:
            return state
    }
}