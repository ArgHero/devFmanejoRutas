import "./NavBar.css"
import { Link } from "react-router-dom";

function NavBar(props){
    const {isAuth,setIsAuth} = props;
    const cerrarSesionHandler = (event) =>{
        event.preventDefault();
        setIsAuth(false);
    }

    return(<nav className="navegacion">
        <Link to="/">Pagina de inicio</Link>
        <Link to="/citas">Lista de citas médicas</Link>
        {/* <Link to="/asdas">Error</Link> */}
        {isAuth?<a  onClick={cerrarSesionHandler}>Cerrar sesión</a> : <Link to="/login">Iniciar Sesión</Link>}

    </nav>)
}

export default NavBar;