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
      <section className='w-11/12 mx-auto'>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default App
