import { createContext, useContext } from "react";


const Context = createContext();
export const States = ({ children }) => {
   

    return(
        <Context.Provider value={{
          
        }}
        >{children}
        </Context.Provider>
    );
};
export const useStates = () => useContext(Context);