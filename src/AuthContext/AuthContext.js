import React, { useState, useEffect } from "react";
import FireConnection from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState(null);
  useEffect(() => {
    FireConnection.auth().onAuthStateChanged(setUser);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
