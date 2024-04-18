import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const PrivateRouter = () => {
  //TODO global state'Den okunacak bilgiye göre
  // const user = false

  //? consuming
  const { signed } = useContext(LoginContext)
  return signed ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
