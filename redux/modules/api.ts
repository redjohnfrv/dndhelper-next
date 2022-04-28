import axios from 'axios'
import {API_URL} from '../../api'

const getModules = () => {
  return axios({
    method: 'GET',
    url: `${API_URL}/modules`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const modulesApi = {
  getModules,
}
