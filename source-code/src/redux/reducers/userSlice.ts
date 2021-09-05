import { createSlice } from '@reduxjs/toolkit'

import { IUser } from 'services/user/type'

export const userSlice: any = createSlice({
  name: 'user',
  initialState: {
    currentUser: {}
  },
  reducers: {
    setCurrentUser: (state: any, action: { payload: IUser }): void => {
      state.currentUser = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer
