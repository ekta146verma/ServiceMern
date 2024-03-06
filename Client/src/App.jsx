import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Service } from "./Pages/Service";


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/service" element = {<Service/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
