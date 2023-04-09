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
  const [active,setActive] = useState(false)
  return (
    <AppContext.Provider value={{ option, setOption,select,setSelect,elem,setElem,active,setActive }}>
      {children}
    </AppContext.Provider>
  );
};

const useYourContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useYourContext };
