import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const PrivateRouter = () => {
  const {signed} = useContext(LoginContext)
  const user = signed
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRouter
