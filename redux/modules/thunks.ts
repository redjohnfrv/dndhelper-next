import {createAsyncThunk} from '@reduxjs/toolkit'
import {AxiosError, AxiosResponse} from 'axios'
import _ from 'lodash'
import {IModule, MODULES_CREATE, MODULES_GET, MODULES_UPDATE} from '../../dto/module'
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

export const createModule = createAsyncThunk(
  MODULES_CREATE,
  async (module: Partial<Omit<IModule, 'id'>>) => {
    try {
      const response: AxiosResponse = await modulesApi.createModule(module)
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })

export const moduleUpdate = createAsyncThunk(
  MODULES_UPDATE,
  async (payload: {id: string, overview?: any, preview?: any}) => {
    try {
      const {id} = payload
      const response: AxiosResponse =
        await modulesApi.moduleUpdate(id, _.omit(payload, ['id']))
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })
