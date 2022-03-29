import { 
    START_FAVORITES_REQUEST, 
    END_RETRIEVE_FAVORITES_REQUEST, 
    END_SAVE_FAVORITES_REQUEST, 
    ADD_FAVORITE, 
    REMOVE_FAVORITE 
} from '../actionTypes'

const startFavoritesRequest = () => ({
    type: START_FAVORITES_REQUEST
})

const endGetFavoritesRequest = (favorites) => ({
    type: END_RETRIEVE_FAVORITES_REQUEST,
    favorites: favorites
})

const endSaveFavoritesRequest = () => ({
    type: END_SAVE_FAVORITES_REQUEST
})

export const retrieveFavoritesFromLocalStorage = () => {
    return (dispatch) => {
        dispatch(startFavoritesRequest())
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        dispatch(endGetFavoritesRequest(favorites))
    }
}

export const addFavorite = (newFavorite) => ({
    type: ADD_FAVORITE,
    newFavorite: newFavorite
})

export const removeFavorite = (favoriteToRemove) => ({
    type: REMOVE_FAVORITE,
    favoriteToRemove: favoriteToRemove
})