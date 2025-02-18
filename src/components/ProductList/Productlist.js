import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import "./Productlist.css";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log(ProductList)
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/product");
      console.log("Fetched products: ", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
    <header className="ProductHeading">
    <h1>Products</h1>
    <h2>Order it for yourself or your beloved ones</h2>
    </header>
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
    </div>
  );
};

export default ProductList;
