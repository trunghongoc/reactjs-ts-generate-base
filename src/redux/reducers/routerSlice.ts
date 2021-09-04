import { takeRight } from 'lodash'
import { createSlice } from '@reduxjs/toolkit'
import { RouterStateType } from 'redux/type'
import { RouterItemType } from 'router/type.d'

export const routerSlice: any = createSlice({
  name: 'router',
  initialState: {
    current: null,
    histories: []
  },
  reducers: {
    setRouterConfig: (
      state: RouterStateType,
      action: { payload: RouterItemType }
    ): void => {
      state.current = action.payload
    },
    addToRouterHistories: (
      state: RouterStateType,
      action: { payload: RouterItemType }
    ): void => {
      const maxHistoriesItem: number = 10
      const [lastRouter] = takeRight(state.histories, 1)
      const isSameLastRouter: boolean = lastRouter
        ? lastRouter.name === action.payload.name
        : false

      if (!isSameLastRouter) {
        const newHistories: RouterItemType[] = takeRight(
          [...state.histories, action.payload],
          maxHistoriesItem
        )

        state.histories = newHistories
      }
    }
  }
})

export const { setRouterConfig, addToRouterHistories } = routerSlice.actions

export default routerSlice.reducer
