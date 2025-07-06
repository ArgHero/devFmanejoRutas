import { Link } from "react-router-dom"
import "./Home.css"

function Home(params){

    return(<section className="homepage-main">

        <h2>Servicios disponibles</h2>
        <ul className="services-list">
          <li>✔️ Citas médicas</li>
          <li>✔️ Historial clínico</li>
          <li>✔️ Atención personalizada</li>
        </ul>
        <p className="login-button-wrapper">
          <Link to="/login" className="login-button">Iniciar Sesión</Link>
        </p>

    </section>)
}

export default Home