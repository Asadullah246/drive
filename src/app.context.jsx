import axios from "axios";
import { createContext, useEffect, useState } from "react";
import base from "./components/Database";

export const AppContext = createContext({});
export const AppContextProvider = ({ children }) => {
    const [allFiles, setAllFiles] = useState([]);
    const [refresh, setRefresh]=useState(false)
      const [allData2, setAllData2 ] = useState([]);


  const context = {
    allFiles,
    setAllFiles,
    refresh,
    setRefresh,
    allData2,
    setAllData2
  };
  useEffect(() => {
    axios
      .get(`${base}/files`)
      .then(function (response) {
        // console.log("re", response)
        setAllFiles(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refresh]); 

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
