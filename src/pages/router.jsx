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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        />
        <Route
          exact
          path="/categoria/:id"
          element={<CategoryPage />}
        />
        <Route
          exact
          path="/todos"
          element={<CategoryPage />}
        />
        <Route
          exact
          path="/produto/:sku"
          element={<SingleProduct />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default Router