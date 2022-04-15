import axios from 'axios'
import {API_URL} from '..'
import {IAdventure} from '../../dto/adventure'

export const getAdventures = async () => {
  let error = ''

  const data = axios.get(API_URL + '/adventures')
    .then((res) => res.data)
    .catch(err => error = err.message)

  if (error) return error
  return data
}

export const createAdventure = async (adv: Partial<Omit<IAdventure, 'id'>>) => {
  let error = ''

  const request = axios.post(API_URL + '/adventures',
    {...adv},
    {
      headers: {
        'Content-type': 'application/json'
      }
    }

    )
    .then(() => console.log('Creating success!'))
    .catch(err => error = err.message)

  if (error) return error
  return request
}
