import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [option, setOption] = useState({
    question: "",
    option: "",
    answer: [],
  });
  const [select,setSelect] = useState("shortAnswer")
  const [elem,setElem] = useState([])
  return (
    <AppContext.Provider value={{ option, setOption,select,setSelect,elem,setElem }}>
      {children}
    </AppContext.Provider>
  );
};

const useYourContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useYourContext };
