import { configureStore } from '@reduxjs/toolkit'
import itemSlice from '../modules/itemSlice'

const store = configureStore({
  reducer: {
item:itemSlice
  },
})

export default store
