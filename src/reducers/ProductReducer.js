import {
  PRODUCTS_FETCH,
  PRODUCTS_SUPPLIER_CHANGE,
  PRODUCTS_LOADING,
  CATEGORY_SELECT
} from '../actions/types'

const INITIAL_STATE = {
  selectedSupplier: 'tesco',
  categoryProducts: [],
  suppliers: [],
  list: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return {
        ...state,
        suppliers: action.payload,
        loading: false
      }
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case PRODUCTS_SUPPLIER_CHANGE:
      return {
        ...state,
        selectedSupplier: action.payload
      }
    case CATEGORY_SELECT:
      const category = state.suppliers.find((item) => item.category.id === action.payload.id)
      return {
        ...state,
        categoryProducts: category.products
      }
    default:
      return state
  }
}
