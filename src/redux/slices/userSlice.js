/* eslint-disable object-curly-newline */
import { createSlice } from '@reduxjs/toolkit'
import { initState } from '../initState'

const userSlice = createSlice({
  name: 'user',
  initialState: initState.user,
  reducers: {
    addToken(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.token = action.payload
    },
    addUserId(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.userId = action.payload
    },
    setUser(state, action) {
      return {
        ...state,
        _id: action.payload._id,
        name: action.payload.name,
        about: action.payload.data.about,
        avatar: action.payload.data.avatar,
        group: action.payload.data.group,
        email: action.payload.data.email,
        token: action.payload.token,
      }
    },
    removeUser() {
      return initState.user
    },
  },
})

export const { addToken, addUserId, setUser, removeUser } = userSlice.actions
export const userReducer = userSlice.reducer
export const getUserSelector = (state) => state.user
export const getTokenSelector = (state) => state.user.token
export const getUserIdSelector = (state) => state.user._id
export const getUserEmailSelector = (state) => state.user.email
