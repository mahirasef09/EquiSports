import { useContext } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from './Components/Footer'
import { AuthContext } from './Providers/AuthProvider'

function App() {
  const { setProducts } = useContext(AuthContext);
  const loadedEquipment = useLoaderData();
  setProducts(loadedEquipment);

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
