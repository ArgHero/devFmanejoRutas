import React from 'react';
import {globalRef} from "../../assets/globalStore"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CitaDetalles.css';

const CitaDetalles = () => {
    const paciente =  globalRef.current;
    const id = useParams().id;
    const cita = paciente.citas.find(consulta=> consulta.id===id)
    
    
    if (!cita) return <p>No se ha seleccionado ninguna cita.</p>;
    
    return (<>
        <div className="detalle-cita">
            <h2>Detalles de la Cita</h2>
            <ul>
                <li><strong>ID:</strong> {cita.id}</li>
                <li><strong>Fecha:</strong> {new Date(cita.fecha).toLocaleString()}</li>
                <li><strong>Especialidad:</strong> {cita.especialidad}</li>
                <li><strong>Médico:</strong> {cita.medico}</li>
                <li><strong>Motivo:</strong> {cita.motivo}</li>
                <li><strong>Estatus:</strong> {cita.estatus}</li>
                <li><strong>Notas:</strong> {cita.notas || 'Sin observaciones'}</li>
            </ul>
        </div>
        <button className='btn-regresar' type="button"><Link to="/citas" >Regresar</Link></button>
    </>
        
    );
};

export default CitaDetalles;
