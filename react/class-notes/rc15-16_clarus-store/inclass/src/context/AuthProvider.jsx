import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// const {Provider} =  createContext()
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };

  const logout = () => setUser(null)
 

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
