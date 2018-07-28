import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { NavigationActions } from 'react-navigation'
import moxios from 'moxios'
import { PRODUCTS_FETCH, PRODUCTS_LOADING, PRODUCTS_SUPPLIER_CHANGE, CATEGORY_SELECT } from '@actions/types'
import { getProducts, supplierPickerChange, selectCategory } from '@actions'
import instance from '@providers/instance'
import getProductsMock from '@tests/__mocks__/getProducts.json'
import categoryMock from '@tests/__mocks__/category.json'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getProducts actions', () => {
  beforeEach(() => {
    moxios.install(instance)
  })

  afterEach(() => {
    moxios.uninstall(instance)
  })

  it('fetch products successfully with PRODUCTS_FETCH', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: getProductsMock
      })
    })
    const expectedActions = [
      { type: PRODUCTS_LOADING },
      { type: PRODUCTS_FETCH, payload: getProductsMock.categories }
    ]
    const store = mockStore()

    return store.dispatch(getProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('set supplier when supplierPickerChange', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: getProductsMock
      })
    })
    const expectedActions = [
      { type: PRODUCTS_SUPPLIER_CHANGE, payload: 'tesco' },
      { type: PRODUCTS_LOADING },
      { type: PRODUCTS_FETCH, payload: getProductsMock.categories }
    ]
    const store = mockStore()

    store.dispatch(supplierPickerChange('tesco')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('set category when selectCategory', () => {
    const expectedActions = [
      NavigationActions.navigate({ routeName: 'Category', params: {title: categoryMock.name} }),
      { type: CATEGORY_SELECT, payload: categoryMock }
    ]
    const store = mockStore()

    store.dispatch(selectCategory(categoryMock))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
