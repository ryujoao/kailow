import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import ProtectedRoute from './pages/protectedRoute'
import Recuperar from './pages/recuperar'
import Cadastro from './pages/cadastro'
import Sobre from './pages/sobre'
import EditarPerfil from './pages/editarPerfil'
import Perfil from './pages/perfil'
import Comunidades from './pages/comunidades'
import ScrollToTop from './components/ScrollToTop'
import Configurações from './pages/config'
import Premium from './pages/premium'
import Publicar from './pages/publicar'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path='/perfil' element={<ProtectedRoute> <Perfil /> </ProtectedRoute>} />
        <Route path="/sobre" element={<ProtectedRoute> <Sobre /> </ProtectedRoute>} />
        <Route path='/editar' element={<ProtectedRoute> <EditarPerfil /> </ProtectedRoute>} />
        <Route path='/comunidades' element={<ProtectedRoute> <Comunidades /> </ProtectedRoute>} />
        <Route path='/configuracao' element={<ProtectedRoute> <Configurações /> </ProtectedRoute>} />
        <Route path='/premium' element={<ProtectedRoute> <Premium /> </ProtectedRoute>} />
        <Route path='/publicar' element={<ProtectedRoute> <Publicar /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        {/* <Route path="/home" element={<Home /> }/> */}

      </Routes>
    </>
  )
}

export default App