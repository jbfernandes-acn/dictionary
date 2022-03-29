
// FAVORITES

export const areFavoritesLoading = (store) => {
    return store && store.favorites.isLoading
}

export const getFavorites = (ascending = true) => (store) => {
    const sortFunction = ascending ?
        ((a, b) => (a > b) ? 1 : (a < b) ? -1 : 0) :
        ((a, b) => (b > a) ? 1 : (b < a) ? -1 : 0)
    return store && store.favorites.favorites.sort(sortFunction)
}

export const checkIsFavorite = (word) => (store) => {
    return store && store.favorites.favorites.includes(word)
}




// PRODUCTS

export const isWordLoading = (store) => {
    return store && store.word.isLoading
}

export const getWord = (store) => {
    return store && store.word.word
}