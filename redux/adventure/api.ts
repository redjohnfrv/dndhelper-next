import axios from 'axios'
import {API_URL} from '../../api'

const getAdventures = () => {
  return axios({
    method: 'GET',
    url: `${API_URL}/adventures`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}


export const adventuresApi = {
  getAdventures,
}
