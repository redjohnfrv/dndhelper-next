import axios from 'axios'
import {API_URL} from '../../api'
import {
  IModule,
  INote,
  IOverview,
  IPreview,
  IScenario
} from '../../dto/module'

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

const updateModule = (
  id: string,
  payload: {
    overview?: IOverview,
    preview?: IPreview,
    scenario?: IScenario,
    notes?: INote,
  }
) => {
  return axios({
    method: 'PATCH',
    data: payload,
    url: `${API_URL}/modules/${id}`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

const deleteModule = (id: string) => {
  return axios({
    method: 'DELETE',
    url: `${API_URL}/modules/${id}`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const modulesApi = {
  getModules,
  createModule,
  updateModule,
  deleteModule,
}
