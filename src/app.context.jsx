import { createContext, useState } from "react";

export const AppContext = createContext({});
export const AppContextProvider = ({ children }) => {
    const [allData2, setAllData2] = useState([]);


  const context = {
    allData2,
    setAllData2
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
