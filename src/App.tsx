import {Route, Routes } from "react-router";
import Home from "./pages/Home"
import ProductDetail from "./pages/Product/ProductDetailPage"
import AddProductPage from "./pages/Admin/AddProductPage";
import DashboardPage from "./pages/Admin/DashboardPage";
import Layout from "./modules/Admin/Layout";
import ProductsList from "./pages/Admin/ProductsList";


function App() {


  return (
        
    <Routes>
      {/* Public Routes (No Sidebar) */}
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetail />} />
      {/* <Route path="products-2" element={<AddProductPage />} />
      <Route path="dashboard-2" element={<DashboardPage />} /> */}
      
      <Route path="/admin/*" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="products-table" element={<AddProductPage />} />
        <Route path="products-list" element={<ProductsList /> } />
      </Route>
    </Routes>
    
  )
}

export default App
