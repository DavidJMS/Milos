import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import Clientes from './pages/Clientes'
import Proveedores from './pages/Proveedores'
import Inventario from './pages/Inventario'

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='clientes' element={<Clientes />} />
          <Route path='proveedores' element={<Proveedores />} />
          <Route path='inventario' element={<Inventario />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
