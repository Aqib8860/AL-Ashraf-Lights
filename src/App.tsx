import {Route, Routes } from "react-router";
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import DashboardPage from "./pages/admin/DashboardPage";
import Layout from "./components/admin/AdminLayout";
import ProductsList from "./pages/admin/ProductsList";
import ProductTablePage from "./pages/admin/ProductTablePage";
import AddProduct from "./pages/admin/AddProduct";


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
        <Route path="products-table" element={<ProductTablePage />} />
        <Route path="products-list" element={<ProductsList /> } />
        <Route path="add-product" element={<AddProduct /> } />
      </Route>
    </Routes>
    
  )
}

export default App
