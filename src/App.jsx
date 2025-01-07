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
    <div className="bg-white dark:bg-black">
      <header className='sticky top-0 z-50 bg-white shadow-md'>
        <NavBar></NavBar>
      </header>
      <main className='w-11/12 mx-auto'>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
