import { useDispatch } from "react-redux"
import useAxios from "./useAxios"

const useStockRequest = () => {
  const { axiosToken } = useAxios()
  const dispatch = useDispatch()

  const getFirms = async () => {
    // dispatch()
    try {
      const { data } = axiosToken("/firms")
      console.log(data)
      //   dispatch()
    } catch (error) {
      //   dispatch()
      console.log(error)
    }
  }

  return { getFirms }
}

export default useStockRequest
