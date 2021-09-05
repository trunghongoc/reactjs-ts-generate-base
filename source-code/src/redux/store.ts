import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userSlice from './reducers/userSlice'
import routerSlice from './reducers/routerSlice'

const customizedMiddleware: any = getDefaultMiddleware({
  serializableCheck: false
})

const persistConfig: any = {
  key: 'root',
  storage,
  whitelist: ['user', 'router']
}

const persistedReducer: any = persistReducer(
  persistConfig,
  combineReducers({
    user: userSlice,
    router: routerSlice
  })
)

export default configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware
})
