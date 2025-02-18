import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/header";
import NatureCandle from "./components/naturecandle/naturecandle";
import ProductCard from "./components/ProductCard/ProductCard";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/footer/footer"; 
import PopularProducts from "./components/popularproducts/popularproducts";
import ProductDetails from "./components/ProductDetails/ProductDetail";
import AdminPage from "./Admin/Adminpage";
import ProductList from "./components/ProductList/Productlist";
import ProductForm from "./Productform/Productforms";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/admin" element={<AdminPage />} />

        
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <>
                    <NatureCandle />
                    <ProductList />
                    <Benefits />
                    <PopularProducts />
                  </>
                } />

               
                <Route path="/products/:id" element={<ProductDetails />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;