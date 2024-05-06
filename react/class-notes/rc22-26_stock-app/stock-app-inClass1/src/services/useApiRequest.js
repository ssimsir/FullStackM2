import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

//?Custom hook
//? Eger uygulamanın her yerinde kullanmak için bazı fonksiyonlara ihtyaç varsa  ve bu fonksiyonlar içerisinde custom hook'ların ( useSelector, useDispatch,useNavigate etc.) kullanılması gerekiyorsa o Zaman çözüm Bu dosyayı custom hook'a çevirmektir.  

const useApiRequest = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (userData) => {
    //   const BASE_URL = "https://10001.fullstack.clarusway.com"

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      )
      dispatch(loginSuccess(data))
      toastSuccessNotify("Login işlemi başarılı")
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login başarısız oldu")
      console.log(error)
    }
  }

  const register = async (userInfo) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      )
      dispatch(registerSuccess(data))
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
    }
  }
  const logout = async () => {}

  return { login, register, logout }
}

export default useApiRequest
