import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Layout from './Layout';
import {Routes,Route} from "react-router-dom";
import Indexpage from './pages/Indexpage';
import Loginpage from './pages/LoginPage';
import Signuppage from './pages/Signuppage';
import Searchbooks from './pages/Searchbooks';
import Book from './pages/Book';
import Cart from './pages/Cart';
import Orders from './pages/Orders';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Indexpage/>}></Route>
          <Route path={'/login'} element={<Loginpage/>}></Route>
          <Route path={'/signup'} element={<Signuppage/>}></Route>
          <Route path={'/search'} element={<Searchbooks/>}></Route>
          <Route path={'/book/:id'} element={<Book/>}></Route>
          <Route path={'/cartItems'} element={<Cart/>}></Route> 
          <Route path={'/orders'} element={<Orders/>}></Route> 
        </Route>
      </Routes>
    </>
  )
}

export default App
