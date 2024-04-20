import React, { Children, createContext, useState } from "react";

// const {Provider} =  createContext()
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
