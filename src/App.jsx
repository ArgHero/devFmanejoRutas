import './styles/App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import PerfilUsuario from './pages/perfilUsuario/PerfilUsuario'
import ProtectedRoute from './components/rutaProtegida/ProtectedRoute'
import Login from './pages/login/Login'
import { useEffect, useState } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{console.log(isAuth)},[isAuth])

  return (
    <main style={{display:'flex', flexDirection: 'column'}}>
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/citas' element={<About />} />
        <Route path='/login' element={<Login isAuth={isAuth} setIsAuth = {setIsAuth}/>} />
        <Route path='/cita/:id' element={<ProtectedRoute isAuth={isAuth} children={<PerfilUsuario />} />}/>
        <Route path='*' element={<NotFound />}/>

      </Routes>
    
    </ main>
  )
}

export default App
