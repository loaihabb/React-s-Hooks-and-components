import  React  from "react";
import  ReactDOM  from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//4- wrap all app with provider
import { UseContextProvider } from "./components/useContext";


ReactDOM.render(
    <UseContextProvider>
        <App/>
    </UseContextProvider>
, document.getElementById("root"))
//ReactDOM.render(<h2> Hello from react</h2>, document.getElementById("root"))
