//import { Button } from "react-bootstrap";
import Navbar from "./components/Navbar";
import FormInput from "./components/Form";
import About from "./components/AboutAndUseState";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error404 from "./components/Error404";
import Home from "./components/Home";
import Footer from "./components/Footer";
//5- this for useContext in the app
//import { useContext } from "react";
//import { colorContext } from "./components/useContext";


const App = () => {
/*useContext : 
    const data = useContext(colorContext) // this is important to call the function from everywhere
    and in return (
        <div>
            {data}
        <div>
    )

    const {data, changeData } = useContext(colorContext)

*/
    //const name = "this is API"
    /*
    const showAbout = () => {
        if (window.location.pathname === "/about") {
            return <About />
        }
    }   
    /*
    const onChangeHandler = (e) => {
        console.log(e)
    }
    */
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/login" element={<FormInput />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;


/*
            <h1 className="style1">this is my project</h1>
            <h1 style={{ color: "green", backgroundColor: "red" }}>{name}</h1>
            <Button className="btn btn-danger">Click me</Button>

            <Button onClick={printTitle} className="btn btn-info p-2 m-2"> Click </Button>
            <input className="p-2 m-2" onChange={onChangeHandler}/>

*/