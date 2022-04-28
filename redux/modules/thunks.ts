import {createAsyncThunk} from '@reduxjs/toolkit'
import {AxiosError, AxiosResponse} from 'axios'
import {MODULES_GET} from '../../dto/module'
import {modulesApi} from './api'

export const getModules = createAsyncThunk(
  MODULES_GET,
  async () => {
    try {
      const response: AxiosResponse = await modulesApi.getModules()
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })
