//import favorites from './favorites'
import word from './word'
import favorites from './favorites'
import wordoftheday from './wordoftheday'
import { combineReducers } from 'redux'

export default combineReducers({ word, wordoftheday, favorites })