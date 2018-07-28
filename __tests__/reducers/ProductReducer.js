import { PRODUCTS_SUPPLIER_CHANGE, PRODUCTS_LOADING, PRODUCTS_FETCH, CATEGORY_SELECT } from '@actions/types'
import productReducer from '@reducers/ProductReducer'
import getProductsMock from '@tests/__mocks__/getProducts.json'

describe('Product reducer', () => {
  const state = {
    selectedSupplier: 'tesco',
    categoryProducts: [],
    suppliers: [],
    list: [],
    loading: false
  }

  it('initial reducer values', () => {
    const reducer = productReducer(undefined, {})
    expect(reducer).toEqual(state)
  })

  it('set new product selected supplier', () => {
    const reducer = productReducer(state, { type: PRODUCTS_SUPPLIER_CHANGE, payload: 'tesco2' })
    expect(reducer).toEqual({
      ...state,
      selectedSupplier: 'tesco2'
    })
  })

  it('set loading while fetching', () => {
    const reducer = productReducer(state, { type: PRODUCTS_LOADING })
    expect(reducer).toEqual({
      ...state,
      loading: true
    })
  })

  it('set new products fetched', () => {
    const reducer = productReducer(state, { type: PRODUCTS_FETCH, payload: getProductsMock })
    expect(reducer).toEqual({
      ...state,
      suppliers: getProductsMock,
      loading: false
    })
  })

  it('set new products fetched', () => {
    const id = 25971
    const reducer = productReducer({...state, suppliers: getProductsMock}, { type: CATEGORY_SELECT, payload: { id } })
    const category = getProductsMock.find((item) => item.category.id === id)
    expect(reducer).toEqual({
      ...state,
      suppliers: getProductsMock,
      categoryProducts: category.products
    })
  })
})
