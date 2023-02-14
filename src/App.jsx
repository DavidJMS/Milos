import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import Clientes from './pages/Clientes'
import AgregarCliente from './pages/AgregarCliente'
import Proveedores from './pages/Proveedores'
import AgregarProveedor from './pages/AgregarProveedor'
import Inventario from './pages/Inventario'

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='clientes' element={<Clientes />} />
          <Route path='agregar-cliente' element={<AgregarCliente />} />
          <Route path='proveedores' element={<Proveedores />} />
          <Route path='agregar-proveedor' element={<AgregarProveedor />} />
          <Route path='inventario' element={<Inventario />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
