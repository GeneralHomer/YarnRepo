import { Link } from "react-router-dom";

import './style.css';

const NavBar =  () =>{
return(
    <div>

    <nav className="navBar">
        <div className="rotas">
            
            <Link className="links" to="/">Home Page</Link>
            <Link className="links" to="/Componentes">Tutorial Vite</Link>
            <Link className="links" to="/Assinc">Requisição Assincrona</Link>
            <Link className="links" to="/Props">Sobre Props</Link>

            
        </div>
    </nav>
</div>
);
}
export default NavBar;