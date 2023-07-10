import axios from "axios";
import { createContext, useEffect, useState } from "react";
import base from "./components/Database";

export const AppContext = createContext({});
export const AppContextProvider = ({ children }) => {
    const [allFiles, setAllFiles] = useState([]);
    const [allFiles2, setAllFiles2] = useState([]);
    const [refresh, setRefresh]=useState(false)
      const [allData2, setAllData2 ] = useState([]);
      const [sRefresh, setSRefresh]=useState(false)


  const context = {
    allFiles,
    setAllFiles,
    refresh,
    setRefresh,
    allData2,
    setAllData2,
    sRefresh, setSRefresh,
    allFiles2, setAllFiles2
  };
  useEffect(() => {
    axios
      .get(`${base}/files`)
      .then(function (response) {
        // console.log("re", response)
        setAllFiles(response.data);
        const alld=(response.data)
        console.log("all",alld); 
        const filtered=alld.filter(f=>f.status=="approved")
        console.log("fi",filtered);
        setAllFiles2(filtered)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [refresh]);


  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
