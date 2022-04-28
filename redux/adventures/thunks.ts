import {createAsyncThunk} from '@reduxjs/toolkit'
import {AxiosError, AxiosResponse} from 'axios'
import {ADVENTURES_DELETE, ADVENTURES_GET} from '../../dto/adventure'
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
