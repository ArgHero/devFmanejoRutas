import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar(params){

    return(<nav style={{display: "flex", justifyContent: "space-between", width: "80vw", height:"3rem"}}>
        <Link to="/">Pagina de inicio.</Link>
        <Link to="/citas">Lista de citas médicas.</Link>
        {/* <Link to="/asdas">Error</Link> */}
        <Link to="/login">Login</Link>

    </nav>)
}

export default NavBar;