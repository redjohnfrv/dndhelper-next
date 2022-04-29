import axios from 'axios'
import {API_URL} from '../../api'
import {IModule, IOverview} from '../../dto/module'

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

const moduleUpdate = (id: string, payload: any) => {
  return axios({
    method: 'PATCH',
    data: payload,
    url: `${API_URL}/modules/${id}`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const modulesApi = {
  getModules,
  createModule,
  moduleUpdate,
}
