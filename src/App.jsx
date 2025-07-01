import './styles/App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import NotFound from './pages/notFound/NotFound'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import PerfilUsuario from './pages/perfilUsuario/PerfilUsuario'
import ProtectedRoute from './components/rutaProtegida/ProtectedRoute'
import Login from './pages/login/Login'

function App() {




  return (
    <>
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user/:id' element={<ProtectedRoute isAuth={true} children={<PerfilUsuario />} />}/>
        <Route path='*' element={<NotFound />}/>

      </Routes>
    
    </>
  )
}

export default App
