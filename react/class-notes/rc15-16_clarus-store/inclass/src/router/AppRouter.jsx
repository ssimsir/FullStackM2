import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
	return (
		// <BrowserRouter>
		<>
			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Login />} />

				<Route path="/dashboard" element={<PrivateRouter />}>
					<Route path="" element={<Home />} />
          
					<Route path="/dashboard/products" element={<Products />} />  {/* Absolute path */}
          
					<Route path="about" element={<About />} />   {/* Relative path */}
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
		// </BrowserRouter>
	);
};

export default AppRouter;
