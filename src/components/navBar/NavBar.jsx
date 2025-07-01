import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar(params){

    return(<nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/asdas">Error</Link>
        <Link to="/login">Login</Link>

    </nav>)
}

export default NavBar;