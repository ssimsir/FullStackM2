import { useEffect, useState } from "react";
import PurchasesTable from "../components/PurchasesTable";
import useStockRequest from "../services/useStockRequest";
import PurchasesModal from "../components/PurchasesModal";

const Purchases = () => {

  const { getStock } = useStockRequest()

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const [info, setInfo] = useState({
    firm: "",
    product: "",
    brand: "",
    quantity: "",
    price:"",
  })
  const handleClose = () => {
    setOpen(false)
    setInfo({
      firm: "",
      product: "",
      brand: "",
      quantity: "",
      price:"",
    })
  }

  useEffect(() => {
    getStock("purchases")
  }, [])
	return (
	<div>
		<PurchasesTable handleOpen={handleOpen} setInfo={setInfo} />
    <PurchasesModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
	</div>)
};

export default Purchases;
