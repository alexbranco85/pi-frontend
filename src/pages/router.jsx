import React from "react"
import { Provider } from "react-redux"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./Home"
import CategoryPage from "./Category"
import SingleProduct from "./Single"
import About from "./About"
import Contact from "./Contact"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cart from "./Cart"
import Checkout from "./Checkout"
import Thanks from "./Thanks"

const Router = () => {
  
  return (
    <BrowserRouter>
    
      <Routes>
        <Route
          exact
          path="/"
          element={<><Header /><Home /><Footer /></>}
        />
        <Route
          exact
          path="/categoria/:id"
          element={<><Header /><CategoryPage /><Footer /></>}
        />
        <Route
          exact
          path="/todos"
          element={<><Header /><CategoryPage /><Footer /></>}
        />
        <Route
          exact
          path="/produto/:sku"
          element={<><Header /><SingleProduct /><Footer /></>}
        />
        <Route
          exact
          path="/cart"
          element={<><Header /><Cart /><Footer /></>}
        />
        <Route
          exact
          path="/checkout"
          element={<><Header /><Checkout /><Footer /></>}
        />
        <Route
          exact
          path="/thanks"
          element={<><Header /><Thanks /><Footer /></>}
        />
        <Route
          exact
          path="/contato"
          element={<><Header /><Contact /><Footer /></>}
        />
        <Route
          exact
          path="/quemsomos"
          element={<><Header /><About /><Footer /></>}
        />
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router