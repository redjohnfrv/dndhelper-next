import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'dnd',
  storage,
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)
