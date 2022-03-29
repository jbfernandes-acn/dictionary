import { 
    START_FAVORITES_REQUEST, 
    END_RETRIEVE_FAVORITES_REQUEST, 
    END_SAVE_FAVORITES_REQUEST,
    ADD_FAVORITE, 
    REMOVE_FAVORITE 
} from '../actionTypes'

const initialState = {
    favorites: [],
    isLoading: true
}

export default function (state = initialState, action) {
    let newFavoriteList
    switch (action.type) {
        case START_FAVORITES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case END_RETRIEVE_FAVORITES_REQUEST:
            const favorites = action.favorites
            return {
                ...state,
                favorites: favorites,
                isLoading: false
            }
        case END_SAVE_FAVORITES_REQUEST:
            return {
                ...state,
                isLoading: false
            }
        case ADD_FAVORITE:
            const newFavorite = action.newFavorite
            newFavoriteList = [...state.favorites, newFavorite]
            localStorage.setItem('favorites', JSON.stringify(newFavoriteList))
            return {
                ...state,
                favorites: newFavoriteList
            }
        case REMOVE_FAVORITE:
            const favoriteToRemove = action.favoriteToRemove
            newFavoriteList = state.favorites.filter(favorite => favorite !== favoriteToRemove)
            localStorage.setItem('favorites', JSON.stringify(newFavoriteList))
            return {
                ...state,
                favorites: newFavoriteList
            }
        default:
            return state
    }
}