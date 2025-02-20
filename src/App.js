import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./components/header/header";
import {NatureCandle} from "./components/naturecandle/naturecandle";
import {Benefits} from "./components/Benefits/Benefits";
import {Footer} from "./components/footer/footer";
import {ProductDetails} from "./components/ProductDetails/ProductDetail";
import {AdminPage} from "./Admin/Adminpage";
import {ProductList} from "./components/ProductList/Productlist";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Page Route */}
        <Route path="/admin" element={<AdminPage />} />

        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <NatureCandle />
                      <ProductList />
                      <Benefits />
                    </>
                  }
                />
                <Route path="/product/:id" element={<ProductDetails />} />

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
