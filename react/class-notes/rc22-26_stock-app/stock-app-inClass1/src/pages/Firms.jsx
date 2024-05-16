import { useEffect, useState } from "react"
// import useAxios from "../services/useAxios"
import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import FirmCard from "../components/FirmCard"
import FirmModal from "../components/FirmModal"
import TableSkeleton, {
  CardSkeleton,
  ErrorMessage,
  NoDataMessage,
} from "../components/DataFetchMessages"

// export const getFirms = async () => {
//   try {
//     const { data } = axiosToken("/firms")
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const Firms = () => {
  // const { axiosToken } = useAxios()
  // const { getFirms, getSales } = useStockRequest()
  const { getStock } = useStockRequest()
  const { firms, loading, error } = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    image: "",
    address: "",
  })

  const handleClose = () => {
    setOpen(false)
    setInfo({
      name: "",
      phone: "",
      image: "",
      address: "",
    })
  }

  useEffect(() => {
    // getFirms()
    // getSales()
    // getStock("sales")
    getStock("firms")
  }, [])

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={2}>
        Firms
      </Typography>

      <Button variant="contained" onClick={handleOpen} disabled={error}>
        New Firm
      </Button>

      {loading && (
        <CardSkeleton>
          <FirmCard />
        </CardSkeleton>
      )}

      {!loading && !firms.length && <NoDataMessage />}
      {!loading && firms.length > 0 && (
        <Grid container gap={2} mt={3} justifyContent={"center"}>
          {firms.map((firm) => (
            <Grid item key={firm._id}>
              <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}

      <FirmModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
    </div>
  )
}

export default Firms
