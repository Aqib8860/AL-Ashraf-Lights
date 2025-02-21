import {Route, Routes } from "react-router";
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      
    </>
  )
}

export default App
