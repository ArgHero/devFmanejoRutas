import "./PerfilUsuario.css"
import {globalRef} from "../../assets/globalStore"
import { Link } from "react-router-dom";

function PerfilUsuario(){
    //const {id} = useParams()
    const paciente =  globalRef.current;

    return(<>
    <div className="paciente-card">
      <img className="paciente-foto" src={paciente.foto} alt={`Foto de ${paciente.nombre}`} />
      <div className="paciente-info">
        <h2>{paciente.nombre}</h2>
        <p><strong>ID:</strong> {paciente.pacienteId}</p>
        <p><strong>CURP:</strong> {paciente.curp}</p>
        <p><strong>Correo:</strong> {paciente.correo}</p>
        <p><strong>Teléfono:</strong> {paciente.telefono}</p>
      </div>
    </div>

    {(!paciente.citas || paciente.citas.length === 0)?<>
    <p>No hay citas registradas</p>
    </>:<>
    <table className="citas-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {paciente.citas.map((cita) => (
          <tr key={cita.id}>
            <td>{cita.id}</td>
            <td>{new Date(cita.fecha).toLocaleString()}</td>
            <td>
                <Link to={`/cita/${cita.id}`}>Ver detalles</Link>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        
    </>}
    </>)
}

export default PerfilUsuario;