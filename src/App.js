import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/header";
import NatureCandle from "./components/naturecandle/naturecandle";
import ProductCard from "./components/ProductCard/ProductCard";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/footer/footer"; 
import PopularProduct from "./components/popularproducts/popularproducts";
import ProductDetails from "./components/ProductDetails/ProductDetail";
import AdminPage from "./Admin/Adminpage";



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
                    <ProductCard />
                    <Benefits />
                    <PopularProduct />
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