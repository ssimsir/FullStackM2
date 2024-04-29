import {legacy_createStore as createStore, combineReducers} from "redux"
import { counterReducer } from "./counterReducer"

//? Storenin oluşturulması
export const  store = createStore(counterReducer)