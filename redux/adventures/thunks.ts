import {createAsyncThunk} from '@reduxjs/toolkit'
import {AxiosError, AxiosResponse} from 'axios'
import {ADVENTURES_AVATAR, ADVENTURES_CREATE, ADVENTURES_DELETE, ADVENTURES_GET, IAdventure} from '../../dto/adventure'
import {adventuresApi} from './api'

export const getAdventures = createAsyncThunk(
  ADVENTURES_GET,
  async () => {
    try {
      const response: AxiosResponse = await adventuresApi.getAdventures()
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })

export const deleteAdventure = createAsyncThunk(
  ADVENTURES_DELETE,
  async (id: string) => {
    try {
      const response: AxiosResponse = await adventuresApi.deleteAdventure(id)
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })

export const createAdventure = createAsyncThunk(
  ADVENTURES_CREATE,
  async (adventure: Partial<Omit<IAdventure, 'id'>>) => {
    try {
      const response: AxiosResponse = await adventuresApi.createAdventure(adventure)
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })

export const setAdventureAvatar = createAsyncThunk(
  ADVENTURES_AVATAR,
  async ({id, avatar}: {id: string, avatar: string}) => {
    try {
      const response: AxiosResponse = await adventuresApi.setAdventureAvatar(id, avatar)
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })
