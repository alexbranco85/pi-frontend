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
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router