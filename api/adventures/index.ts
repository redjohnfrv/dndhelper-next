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
    })
      .then(() => console.log('Creating success!'))
      .catch(err => error = err.message)

  if (error) return error
  return request
}

export const deleteAdventure = async (id: string) => {
  let error = ''

  const request = axios.delete(API_URL + `/adventures/${id}`,{
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(() => console.log('Removing success!'))
    .catch(err => error = err.message)

  if (error) return error
  return request
}

export const setAdventureAvatar = async (id: string, avatar: string) => {
  let error = ''

  const request = axios.patch(API_URL + `/adventures/${id}`,{
    avatar: avatar
  },
    {
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(() => console.log('Uploading success!'))
      .catch(err => error = err.message)

  if (error) return error
  return request
}
