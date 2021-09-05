import { takeRight } from 'lodash'
import { createSlice } from '@reduxjs/toolkit'
import { IRouterState } from 'redux/type'
import { IRouterItem } from 'router/type'

export const routerSlice: any = createSlice({
  name: 'router',
  initialState: {
    current: null,
    histories: []
  },
  reducers: {
    setRouterConfig: (
      state: IRouterState,
      action: { payload: IRouterItem }
    ): void => {
      state.current = action.payload
    },
    addToRouterHistories: (
      state: IRouterState,
      action: { payload: IRouterItem }
    ): void => {
      const maxHistoriesItem: number = 10
      const [lastRouter] = takeRight(state.histories, 1)
      const isSameLastRouter: boolean = lastRouter
        ? lastRouter.name === action.payload.name
        : false

      if (!isSameLastRouter) {
        const newHistories: IRouterItem[] = takeRight(
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
