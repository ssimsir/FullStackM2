import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user:"",
  token:"",
  loading:"",
  error:""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart : (state)=>{
      state.loading = true
    },
    loginSuccess : (state, {payload})=>{
      state.loading = false
      state.token = payload.token
      state.user = payload.user.username
    },
    fetchFail  : (state) => {
      state.loading = false
      state.error = true

    }

  },
})

export const {fetchStart ,loginSuccess, fetchFail} = authSlice.actions
export default authSlice.reducer
