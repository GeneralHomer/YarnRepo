import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Componentes from "./Componentes";
import Home from "./Home";
import Assinc from "./Assinc";
import TreinoProps from "./Props";

const Rotas =()=>{
    return(
        
    <Router>
        <Routes>
            <Route element = {<Home/>} path="/" exact />
            <Route element = {<Componentes/>} path="/Componentes" />
            <Route element= {<Assinc/>} path="/Assinc"/>
            <Route element ={<TreinoProps/>} path="/Props"/>
        </Routes>
    </Router>
    )
}
export default Rotas;