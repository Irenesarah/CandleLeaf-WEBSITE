import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/header";
import NatureCandle from "./components/naturecandle/naturecandle";
import ProductCard from "./components/ProductCard/ProductCard";
import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/footer/footer"; 
<<<<<<< HEAD
import PopularProducts from "./components/popularproducts/popularproducts";
import ProductDetails from "./components/ProductDetails/ProductDetail";
import AdminPage from "./Admin/Adminpage";
import ProductList from "./components/ProductList/Productlist";
import ProductForm from "./Productform/Productforms";
=======
import PopularProduct from "./components/popularproducts/popularproducts";
import ProductDetails from "./components/ProductDetails/ProductDetail";
import AdminPage from "./Admin/Adminpage";


>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97

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
<<<<<<< HEAD
                    <ProductList />
                    <Benefits />
                    <PopularProducts />
                  </>
                } />

               
=======
                    <ProductCard />
                    <Benefits />
                    <PopularProduct />
                  </>
                } />

>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97
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