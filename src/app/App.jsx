import './App.css'
import '../components/Navbar'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CartContent from '../pages/CartContent'
import Productdetail from '../pages/Productdetail'
import { useState, useEffect } from 'react'


function App() {
  const cartFromlocalStorage = JSON.parse(localStorage.getItem('cartItem') || '[]')
  const[cartItem, setCartItem] = useState(cartFromlocalStorage);
  const [warning, setWarning] = useState(false);
  
  const addtoCart = (item) =>{
    const productExist = cartItem.some(val => val.id === item.id);
    
    if(!productExist){
        setCartItem([...cartItem, {...item, qty:1}])
    }else{
      setWarning(true)
      setTimeout(() => {
          setWarning(false);
      }, 2000);
      console.log("item already added!");
    } 
  }

  const updateCart = (item, amount) =>{
    const productExist = cartItem.some(val => val.id === item.id);
    
    if(!productExist){
        setCartItem([...cartItem, {...item, qty:amount}])
    }else{
      setCartItem(cartItem.map((val) => val.id === item.id ?
      {...val, qty: parseInt(amount) + parseInt(val.qty)} : val)
  );
    } 
  }

  const adding = (item) =>{
    setCartItem(cartItem.map((val) => val.id === item.id ?
                {...val, qty: val.qty + 1} : val)
            );
  }

  const removing = (item) =>{
    const ProductExist = cartItem.find((val) => val.id === item.id);
        if (ProductExist.qty === 1) {
            setCartItem(cartItem.filter((x) => x.id !== item.id));
        } else {
            setCartItem(cartItem.map((val) => val.id === item.id ? {
                ...ProductExist,
                qty: ProductExist.qty- 1
            } : val))
        }
  }

  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);



  return (
    <>
      <Navbar cartItem={cartItem} warning={warning} />
      <Routes>
        <Route path={'/'} element={<Home addtoCart={addtoCart}/>}/>
        <Route path={'/cartcontent'} element={<CartContent cartItem={cartItem} setCartItem={setCartItem} adding={adding} removing={removing} />}/>
        <Route path={'/productdetail/:id'} element={<Productdetail updateCart={updateCart}/>}/>
      </Routes>
    </>
  )
}

export default App
