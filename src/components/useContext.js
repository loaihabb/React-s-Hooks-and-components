import React, {createContext} from 'react'
//const value = useContext(MyContext)
//ContextApi, useContext
//to control if the user is logged in or not to view some pages


//1- createContext
const colorContext = createContext();

//6- to update the data 

/*

const [data, setData] = useState("white")
const changeData=(color)=> {
    setData(color)
}

*/

//2- create Provider 
const UseContextProvider = ({children}) => {

  return (
    <colorContext.Provider >
      {children} 
    </colorContext.Provider>
  )
}
//3- export context to use, and provider to wrap all components
export {UseContextProvider, colorContext}

//4- in index.js : wrap all app with provider
//5- right children
//6- import  useContext in App.js