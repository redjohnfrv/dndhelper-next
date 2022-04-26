import axios from 'axios'
import {API_URL} from '../index'
import {IModule, IOverview} from '../../dto/module'

export const getModules = async () => {
  let error = ''

  const data = axios.get(API_URL + '/modules')
    .then((res) => res.data)
    .catch(err => error = err.message)

  if (error) return error
  return data
}

export const createModule = async (module: Partial<Omit<IModule, 'id'>>) => {
  let error = ''

  const request = axios.post(API_URL + '/modules',
    {...module},
    {
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => {
      console.log('Creating success!')
      return res.data.id
    })
    .catch(err => error = err.message)

  if (error) return error
  return request
}

export const deleteModule = async (id: string) => {
  let error = ''

  const request = axios.delete(API_URL + `/modules/${id}`,{
    headers: {
      'Content-type': 'application/json'
    },
  })
    .then(() => console.log('Removing success!'))
    .catch(err => error = err.message)

  if (error) return error
  return request
}

export const updateOverview = async (id: string, overview: IOverview) => {
  let error = ''

  const request = axios.patch(API_URL + `/modules/${id}`,{
      overview,
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
