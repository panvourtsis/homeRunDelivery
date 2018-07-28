import {
  PRODUCTS_FETCH,
  PRODUCTS_SUPPLIER_CHANGE,
  PRODUCTS_LOADING,
  CATEGORY_SELECT
} from './types'
import { NavigationActions } from 'react-navigation'
import { getSupplierProducts } from '@providers/product'

export const supplierChange = (data) => ({
  type: PRODUCTS_SUPPLIER_CHANGE,
  payload: data
})

const categorySelection = (data) => ({
  type: CATEGORY_SELECT,
  payload: data
})

const productsFetch = (data) => ({
  type: PRODUCTS_FETCH,
  payload: data
})

const productLoading = () => ({
  type: PRODUCTS_LOADING
})

export const selectCategory = (category) =>
  (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName: 'Category', params: {title: category.name} }))
    dispatch(categorySelection(category))
  }

export const supplierPickerChange = (supplier) =>
  (dispatch) => {
    dispatch(supplierChange(supplier))
    return dispatch(getProducts(supplier))
  }

export const getProducts = (supplier) =>
  (dispatch) => {
    dispatch(productLoading())
    return getSupplierProducts(supplier)
      .then(({data}) => {
        dispatch(productsFetch(data.categories))
      })
  }
