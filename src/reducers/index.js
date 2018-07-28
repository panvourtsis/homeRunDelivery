import { combineReducers } from 'redux'
import product from './ProductReducer'
import nav from './NavReducer'

export default combineReducers({
  product,
  nav
})
