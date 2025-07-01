import "./Login.css"

function Login(props){
    const {} = props;
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        

    }


    return(<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="txtUser">Usuario</label>
            <input type="text" name="txtUser" id="txtUser" placeholder="usuario@dominio.com" required/>
            <label htmlFor="txtPassword">Contraseña</label>
            <input type="password" name="txtPassword" id="txtPassword" placeholder="contraseña" required/>
            <button type="submit">Enviar</button>
        </form>
    
    </>)
}

export default Login;