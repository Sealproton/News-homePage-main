import React, { createContext, useContext, useState } from "react";

const UserContext = React.createContext();

const MyAppContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <UserContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, MyAppContext };
