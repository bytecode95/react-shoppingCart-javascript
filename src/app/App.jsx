import './App.css'
import '../components/Navbar'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CartContent from '../pages/CartContent'
import Productdetail from '../pages/Productdetail'
import { MyProvider } from '../context/quantty';

function App() {
  
  


  return (
    <MyProvider>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/cartcontent'} element={<CartContent/>}/>
        <Route path={'/productdetail/:id'} element={<Productdetail/>}/>
      </Routes>
    </MyProvider>
  )
}

export default App
