import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
// import ProtectedRoute from './pages/protectedRoute'
import Recuperar from './pages/recuperar'
import Cadastro from './pages/cadastro'
import Sobre from './pages/sobre'
import EditarPerfil from './pages/editarPerfil'
import Perfil from './pages/perfil'
import Comunidades from './pages/comunidades'
import EntrarComunidade from './pages/entrarComunidade'
import Premium from './pages/premium'
import Chat from './components/chat'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recuperar" element={<Recuperar />} />
      <Route path="/cadastro" element={<Cadastro />} />
        <Route path='/perfil' element={<Perfil />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path='/editar' element={<EditarPerfil />} />
      <Route path='/comunidades' element={<Comunidades/>} />
      <Route path='/entrarComunidade' element={<EntrarComunidade/>} />
      <Route path='/premium' element={<Premium/>} />
      {/* <Route path="/home" element={<ProtectedRoute />} /> */}
      {/* <Route path="/home" element={<Home />} /> */}
      {/* <Route path="/home" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } /> */}
      <Route path='home' element={<Home />}/>
      <Route path='chat' element={<Chat />}/>

    </Routes>
  )
}

export default App