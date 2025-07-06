import './styles/App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import PerfilUsuario from './pages/perfilUsuario/PerfilUsuario'
import ProtectedRoute from './components/rutaProtegida/ProtectedRoute'
import Login from './pages/login/Login'
import Footer from './components/footer/Footer'
import CitaDetalles from './pages/citaDetalles/CitaDetalles'
import {globalRef} from "./assets/globalStore"

import { useEffect, useState } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  globalRef.current  = {
  pacienteId: "USR-00123",
  nombre: "Frida Nuñez",
  curp: "NUF850910MDFRRN08",
  correo: "cuenta@prueba.com",
  telefono: "+52 55 1122 3344",
  foto: "https://i.pinimg.com/736x/92/c8/d1/92c8d1bfe8bac5370234cb651c0c88a6.jpg",
  citas: [
    {
      id: "CITA-1001",
      fecha: "2025-07-15T10:30:00",
      especialidad: "Medicina General",
      medico: "Dra. Ana González",
      motivo: "Chequeo anual",
      estatus: "confirmada",
      notas: "Traer resultados de laboratorio previos"
    },
    {
      id: "CITA-1002",
      fecha: "2025-06-28T09:00:00",
      especialidad: "Dermatología",
      medico: "Dr. Luis Ortega",
      motivo: "Revisión de erupción cutánea",
      estatus: "realizada",
      notas: "Prescripción de crema con corticoide"
    },
    {
      id: "CITA-1003",
      fecha: "2025-08-05T14:15:00",
      especialidad: "Oftalmología",
      medico: "Dra. Marta Salas",
      motivo: "Consulta por visión borrosa",
      estatus: "pendiente",
      notas: ""
    },
    {
      id: "CITA-1004",
      fecha: "2025-07-01T11:00:00",
      especialidad: "Psicología",
      medico: "Lic. Enrique Morales",
      motivo: "Terapia de seguimiento",
      estatus: "cancelada",
      notas: "Paciente solicitó reagendar"
    },
    {
      id: "CITA-1005",
      fecha: "2025-07-20T16:45:00",
      especialidad: "Cardiología",
      medico: "Dr. Fernando Ruiz",
      motivo: "Evaluación post-operatoria",
      estatus: "confirmada",
      notas: "Verificar presión arterial y ECG"
    }
  ]
};

  return (<>
  <NavBar isAuth={isAuth} setIsAuth = {setIsAuth}/>
  <main>
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/citas' element={<ProtectedRoute isAuth={isAuth} children={<PerfilUsuario />} />} />
      <Route path='/login' element={<Login isAuth={isAuth} setIsAuth = {setIsAuth}/>} />
      <Route path='/cita/:id' element={<ProtectedRoute isAuth={isAuth} children={<CitaDetalles />} />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </ main>
  <Footer />
  </>
    // <div className="separador">
      
      
    // </div>
    
  )
}

export default App
