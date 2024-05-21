import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  purchases: [],
  sales: [],
  firms: [],
  products: [],
  brands: [],
  categories: [],
  loading: false,
  error: false,
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },
    // getFirmsSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.firms = payload
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.sales = payload
    // },

    //? action.payload.path
    // getStockSuccess: (state, action) => {
    //   state.loading = false
    //   state[action.payload.path] = action.payload.stockData
    // },

    getStockSuccess: (state, { payload: { path, stockData } }) => {
      state.loading = false
      state[path] = stockData
      // state.error = false
    },

    getProPurBraFirmSuccess: (
      state,
      { payload: { products, purchases, firms, brands } }
    ) => {
      state.loading = false
      state.products = products
      state.purchases = purchases
      state.brands = brands
      state.firms = firms
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  fetchStart,
  getFirmsSuccess,
  getSalesSuccess,
  getStockSuccess,
  getProPurBraFirmSuccess,
  fetchFail,
} = stockSlice.actions

export default stockSlice.reducer
