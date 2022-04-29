import {createAsyncThunk} from '@reduxjs/toolkit'
import {AxiosError, AxiosResponse} from 'axios'
import _ from 'lodash'
import {
  IModule,
  INote,
  IOverview,
  IPreview,
  IScenario,
  MODULES_CREATE, MODULES_DELETE,
  MODULES_GET,
  MODULES_UPDATE,
} from '../../dto/module'
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

export const updateModule = createAsyncThunk(
  MODULES_UPDATE,
  async (payload: {
    id: string,
    overview?: IOverview,
    preview?: IPreview,
    scenario?: IScenario,
    notes?: INote,
  }) => {
    try {
      const {id} = payload
      const response: AxiosResponse =
        await modulesApi.updateModule(id, _.omit(payload, ['id']))
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })

export const deleteModule = createAsyncThunk(
  MODULES_DELETE,
  async (id: string) => {
    try {
      const response: AxiosResponse = await modulesApi.deleteModule(id)
      return response.data
    } catch (error) {
      const {response, message} = error as AxiosError
      return response ? response.data.message : message
    }
  })
