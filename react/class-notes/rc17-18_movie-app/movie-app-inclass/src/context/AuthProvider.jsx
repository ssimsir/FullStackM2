import React, { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false);

	const navigate = useNavigate();

	const createUser = async (email, password) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			navigate("/login");
         toastSuccessNotify("Registered succesfully")
			console.log(userCredential);
		} catch (error) {
			toastErrorNotify(error.message)
		}
	};

   const signIn = async (email, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			navigate("/");
         toastSuccessNotify("Logged in succesfully")
			console.log(userCredential);
		} catch (error) {
			toastErrorNotify(error.message)
		}
	};

   const logOut = async () => {
      try {
         await signOut(auth)
         toastSuccessNotify("Logged Out  succesfully")
      } catch (error) {
         toastErrorNotify(error.message)
      }

   }

	const values = { currentUser, createUser, signIn, logOut};
	return (
		<AuthContext.Provider value={values}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
