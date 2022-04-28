import axios from 'axios'
import {API_URL} from '..'

export const getAdventures = async () => {
  let error = ''

  const data = axios.get(API_URL + '/adventures')
    .then((res) => res.data)
    .catch(err => error = err.message)

  if (error) return error
  return data
}
