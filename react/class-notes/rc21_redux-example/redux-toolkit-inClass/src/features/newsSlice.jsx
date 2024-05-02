import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
	newsData: [],
	loading: false,
	error: false,
};

const getNews = createAsyncThunk("getNews", async () => {
	const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78e";
	const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
   const data=await axios(url)
   console.log(data)
});
const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		setNewsData: () => {},
	},
});

export const {} = newsSlice.actions;

export default newsSlice.reducer;
