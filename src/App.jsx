import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import AllProducts from "./Pages/AllProducts";
import Login from "./Pages/Registration/Login";
import Register from "./Pages/Registration/Register";
import Account from "./Pages/Account";
import Admin from "./Pages/Admin";
import AddProduct from "./Pages/Admin/AddProduct";
import EditProduct from "./Pages/Admin/EditProduct";
import MyState from "./Context/myState";
import { Toaster } from "react-hot-toast";
import SearchProducts from "./Pages/SearchProducts";
import ProtectedRouteAdmin from "./Components/ProtectedRoute/ProtectedRouteAdmin";
import ProtectedRouteUser from "./Components/ProtectedRoute/ProtectedRouteUser";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          {/* all  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* user  */}
          <Route
            path="/"
            element={
              <ProtectedRouteUser>
                <Home />
              </ProtectedRouteUser>
            }
          />
          <Route
            path="/*"
            element={
              <ProtectedRouteUser>
                <NoPage />
              </ProtectedRouteUser>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRouteUser>
                <Product />
              </ProtectedRouteUser>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRouteUser>
                <Cart />
              </ProtectedRouteUser>
            }
          />
          <Route
            path="/allproducts"
            element={
              <ProtectedRouteUser>
                <AllProducts />
              </ProtectedRouteUser>
            }
          />

          <Route
            path="/search/:items"
            element={
              <ProtectedRouteUser>
                <SearchProducts />
              </ProtectedRouteUser>
            }
          />

          {/* admin */}
          <Route
            path="/user"
            element={
              <ProtectedRouteUser>
                <Account />
              </ProtectedRouteUser>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRouteAdmin>
                <Admin />
              </ProtectedRouteAdmin>
            }
          />

          <Route
            path="/addProduct"
            element={
              <ProtectedRouteAdmin>
                <AddProduct />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/editProduct/:id"
            element={
              <ProtectedRouteAdmin>
                <EditProduct />
              </ProtectedRouteAdmin>
            }
          />
        </Routes>
      </Router>
      <Toaster />
    </MyState>
  );
}

export default App;
