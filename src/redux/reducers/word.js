import { START_WORD_REQUEST, END_WORD_REQUEST } from '../actionTypes'

const initialState = {
    word: null,
    isLoading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START_WORD_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case END_WORD_REQUEST:
            return {
                ...state,
                word: action.word,
                isLoading: false
            }
        default:
            return state
    }
}