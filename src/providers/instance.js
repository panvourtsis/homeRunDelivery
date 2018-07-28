import axios from 'axios'
import Config from 'react-native-config'

const instance = axios.create({
  baseURL: Config.API_URL
})

instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['Authorization'] = 'Bearer a716b8649c7b16873ae76d9b0c38271a86b58c447fe0c8dfa709ba6f1e3565dc'

export default instance
