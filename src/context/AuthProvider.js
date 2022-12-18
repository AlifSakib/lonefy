import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const value = {};

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
