import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import Clientes from './pages/Clientes'

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='clientes' element={<Clientes />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
