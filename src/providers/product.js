import instance from './instance'
import Config from 'react-native-config'

export const getSupplierProducts = (data) => {
  return instance.get(`${Config.API_URL}/api/v1/products?supplier=${data}&collection=true`)
}
