import "./PerfilUsuario.css"
import { useParams } from "react-router-dom";

function PerfilUsuario(props){
    const {id} = useParams()
    return(<>
        <h1>El perfil es del usuario {id}</h1>
    </>)
}

export default PerfilUsuario;