import { Routes, Route, Navigate, useMatch } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import ProductDetails from '../pages/ProductDetails';
import Login from '../pages/Login';
import Signup from './../pages/Signup';
import Checkout from './../pages/Checkout';
import { useEffect, useState } from 'react';

import Userdetails from "../pages/userdetails"
import Homeadmin from "../Adminpanel/home"
import Editpage from '../Adminpanel/Editpage';
import Workadmin from '../Adminpanel/work';
import EditWork from '../Adminpanel/Editwork';
import Addwork from '../Adminpanel/workadd';
import Orderadmin from '../Adminpanel/order';



const Routers = () => {
  const [work, setwork] =  useState([]);
   const [isLogged, setIsLogged] = useState("");
    const [user , setuser] =  useState([]);
   useEffect(() => {
      const user = localStorage.getItem("userid");
      if (user) {
        setIsLogged(user);
      }
    }, []);


    const match  = useMatch("/editpage/:id");
    const user1 =  match? user.find((user) => user._id === match.params.id) : null;

    const match1 = useMatch("/editwork/:id");
    const work1 = match1? work.find((work) => work._id === match1.params.id) : null;
  return (
    <Routes>
    <Route path='/' element={<Navigate to ='home' />} />
      <Route path='home' element={<Home isLogged={isLogged} setIsLogged = {setIsLogged}/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='shop/:id' element={<ProductDetails/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='checkout' element={<Checkout/>} />
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='/userdetails' element={<Userdetails isLogged={isLogged} setIsLogged = {setIsLogged} />} />
      <Route path='/adminhome' element={<Homeadmin  user = {user}  setuser = {setuser}/>} />
      <Route path='/editpage/:id' element={<Editpage user = {user1} />} />
      <Route path='/work' element={<Workadmin work = {work} setwork = {setwork}/>} />
      <Route path='/order' element={<Orderadmin/>} />

      <Route path='/editwork/:id' element={<EditWork work = {work1}/>} />
      <Route path='/addwork' element={<Addwork/>} />
      
    </Routes>
  )
}

export default Routers