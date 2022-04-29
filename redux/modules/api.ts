import axios from 'axios'
import {API_URL} from '../../api'
import {IModule} from '../../dto/module'

const getModules = () => {
  return axios({
    method: 'GET',
    url: `${API_URL}/modules`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

const createModule = (module: Partial<Omit<IModule, 'id'>>) => {
  return axios({
    method: 'POST',
    data: {...module},
    url: `${API_URL}/modules`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const modulesApi = {
  getModules,
  createModule,
}
