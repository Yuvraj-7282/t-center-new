import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import React from 'react'
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import AllProducts from "./Pages/AllProducts";
import Login from "./Pages/Registration/Login";
import Register from "./Pages/Registration/Register";
import Account from "./Pages/Account";
function App() {
  return (
   <div>
      <Router>
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/*" element={<NoPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
   </div> 
  )
}

export default App