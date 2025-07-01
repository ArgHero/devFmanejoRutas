import { useRef } from "react";
import "./Login.css"
import { Navigate } from "react-router-dom";

function Login(props){
    const {isAuth,setIsAuth} = props;
    const txtUserRef = useRef(null);
    const txtPasswordRef = useRef(null);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const pass = txtPasswordRef.current.value.trim();
        const user = txtUserRef.current.value.trim();     

        if(user==="cuenta@prueba.com" && pass==="Pa$$word1")
            setIsAuth(true);
        else
            alert("Usuario o contraseña incorrectos")
    }


    return(<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="txtUser">Usuario</label>
            <input type="email" ref={txtUserRef} name="txtUser" id="txtUser" placeholder="usuario@dominio.com" required/>
            <label htmlFor="txtPassword">Contraseña</label>
            <input type="password" ref={txtPasswordRef} name="txtPassword" id="txtPassword" placeholder="contraseña" required/>
            <button type="submit">Enviar</button>
        </form>
        {isAuth && <Navigate to={`/cita/${txtUserRef.current.value.trim()}`} />}
    
    </>)
}

export default Login;