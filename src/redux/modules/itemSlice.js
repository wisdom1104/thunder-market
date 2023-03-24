import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
  }

// 게시물 조회 함수
  export const __getItems = createAsyncThunk('__getItem', async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })

const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers:{

  },
  extraReducers: {
        // 게시물 조회 Reducer -------------------------------
        [__getItems.pending]: (state, action) => {
            state.isLoading = true
            state.error = false
          },
          [__getItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = false
            state.posts = action.payload
          },
          [__getItems.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
          },


}})
export const {} = itemSlice.actions
export default itemSlice.reducer

