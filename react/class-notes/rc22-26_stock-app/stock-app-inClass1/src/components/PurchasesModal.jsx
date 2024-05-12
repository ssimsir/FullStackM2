import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import useStockRequest from "../services/useStockRequest";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function PurchasesModal({ handleClose, open, info, setInfo }) {
	//   const [info, setInfo] = useState({
	//     name: "",
	//     phone: "",
	//     image: "",
	//     address: "",
	//   })

	const { getStock, postStock, putStock } = useStockRequest();
   const navigate = useNavigate();
	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
      if (e.target.value==="newFirm"){
         navigate("/stock/firms/")
      } else if (e.target.value==="newBrand") {
         navigate("/stock/brands/")
      } else if (e.target.value==="newProduct") {
         navigate("/stock/products/")
      }
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (info._id) {
			//? put isteginin
			putStock("purchases", info);
		} else {
			//? post firma işlemi
			postStock("purchases", info);
		}

		//? modal ı kapıtıyoruz
		handleClose();
	};

   useEffect(() => {
      getStock("firms")
      getStock("brands")
      getStock("products")
   }, [])
   
   const {firms, brands, products} = useSelector((state) => state.stock)

   const firm= info.firmId
	console.log("info", firm);
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box
						sx={{ display: "flex", flexDirection: "column", gap: 2 }}
						component={"form"}
						onSubmit={handleSubmit}
					>
						<FormControl fullWidth>
							<InputLabel id="firmLabel">Firm</InputLabel>
							<Select
								labelId="firmLabel"
								id="firm"
								//value={info.firmId.name}
								label="Firm"
								onChange={handleChange}
							>
                        <MenuItem value={"newFirm"}>Add New firm</MenuItem>
								{
                           firms.map(firm =>  (<MenuItem key={firm._id} value={firm._id}>{firm.name}</MenuItem>))
                        }

							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel id="brandLabel">
								Brand
							</InputLabel>
							<Select
								labelId="brandLabel"
								id="brand"
								value={info.brand}
                        defaultValue={info.brand}
								label="Brand"
								onChange={handleChange}
							>
								<MenuItem value={"newBrand"}>Add new brand</MenuItem>
                        {
                           brands.map(brand =>  (<MenuItem key={brand._id} value={brand._id}>{brand.name}</MenuItem>))
                        }
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel id="productLabel">
								Product
							</InputLabel>
							<Select
								labelId="productLabel"
								id="product"
							   value={info.product}
                        defaultValue={info.product}
								label="Product"
								onChange={handleChange}
							>
								<MenuItem value={"newProduct"}>Add new product</MenuItem>
                        {
                           products.map(product =>  (<MenuItem key={product._id} value={product._id}>{product.name}</MenuItem>))
                        }
							</Select>
						</FormControl>

						<TextField
							label="Quantity"
							name="quantity"
							id="quantity"
							type="number"
							variant="outlined"
							value={info.quantity}
                     defaultValue={info.quantity}
							onChange={handleChange}
							required
						/>

						<TextField
							label="Price"
							name="price"
							id="price"
							type="number"
							variant="outlined"
							value={info.price}
							onChange={handleChange}
							required
						/>
						<Button variant="contained" type="submit">
							{info._id ? "UPDATE PURCHASES" : "ADD PURCHASES"}
						</Button>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
