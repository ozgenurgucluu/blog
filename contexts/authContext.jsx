import React, { use } from "react";
import { createContext, useState } from "react";
export const AuthContext = createContext({});
import { useEffect } from "react";

const AuthContextProvider = ({ children, user }) => {
  const [myData, setMyData] = useState(user);
  useEffect(() => {
    setMyData(user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ myData, setMyData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
