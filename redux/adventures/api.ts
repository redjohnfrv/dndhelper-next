import axios from 'axios'
import {API_URL} from '../../api'
import {IAdventure} from '../../dto/adventure'

const getAdventures = () => {
  return axios({
    method: 'GET',
    url: `${API_URL}/adventures`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

const deleteAdventure = (id: string) => {
  return axios({
    method: 'DELETE',
    url: `${API_URL}/adventures/${id}`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

const createAdventure = (adventure: Partial<Omit<IAdventure, 'id'>>) => {
  return axios({
    method: 'POST',
    data: {...adventure},
    url: `${API_URL}/adventures`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

const setAdventureAvatar = (id: string, avatar: string) => {
  return axios({
    method: 'PATCH',
    data: {avatar},
    url: `${API_URL}/adventures/${id}`,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const adventuresApi = {
  getAdventures,
  deleteAdventure,
  createAdventure,
  setAdventureAvatar,
}
