import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import api from '../../axios/api'

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
  }

// 상세 게시물 조회 함수
  export const __getDetail = createAsyncThunk('getDetail', async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products/${payload}`)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  })

  // 게시물 작성 함수
  export const __postDetail = createAsyncThunk('postDetail', async (payload, thunkAPI) => {
    try {
      
      const response = await api.post(`/products`, payload, {
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      })
      console.log("response.data = ",response.data);

      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      console.log("error = ", error);
      return thunkAPI.rejectWithValue(error)
    }
  })

  // 게시물 삭제 함수
  export const __deleteDetail = createAsyncThunk('deleteDetail', async (payload, thunkAPI) => {
    console.log("payload",payload);

    try {
      const {pdId} = payload
      const response = await api.delete(`/products/${pdId}`)
      alert("삭제되었습니다")
      console.log("response.data = ",response.data);
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      console.log("error = ", error);
      return thunkAPI.rejectWithValue(error)
    }
  })

  // 게시물 구매완료

  export const __doneDetail = createAsyncThunk('doneDetail', async (payload, thunkAPI) => {

    try {
      const {pdId} = payload
      const response = await api.patch(`/products/${pdId}/done`)
      console.log("response.data = ",response.data);
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      console.log("error = ", error);
      return thunkAPI.rejectWithValue(error)
    }
  })

   // 게시물 수정 함수
   export const __editDetail = createAsyncThunk('deleteDetail', async (payload, thunkAPI) => {

    try {
      const {pdId, formData} = payload
      const response = await api.post(`/products/${pdId}`, formData,{
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      })
      console.log("response.data = ",response.data);
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      console.log("error = ", error);
      return thunkAPI.rejectWithValue(error)
    }
  })


const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers:{

  },
  extraReducers: {
        // 상세 게시물 조회 Reducer -------------------------------
        [__getDetail.pending]: (state, action) => {
            state.isLoading = true
            state.error = false
          },
          [__getDetail.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = false
            state.posts = action.payload
          },
          [__getDetail.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
          },

          // 게시물 작성 Reducer -------------------------------
        [__postDetail.pending]: (state, action) => {
            state.isLoading = true
            state.error = false
          },
          [__postDetail.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = false
            state.posts = action.payload
          },
          [__postDetail.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
          },


                    // 게시물 삭제 Reducer -------------------------------
        [__deleteDetail.pending]: (state, action) => {
            state.isLoading = true
            state.error = false
          },
          [__deleteDetail.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = false
            state.posts = []
          },
          [__postDetail.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
          },


}})
export const {} = detailSlice.actions
export default detailSlice.reducer

