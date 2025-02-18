import React, { useState, useEffect } from "react";
import "./popularproducts.css";
import { Link } from "react-router-dom";
import axios from "axios";

const PopularProducts = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/product");
                console.log("Fetched Popular Products:", response.data);
                setProducts(response.data.slice(0, 4)); // Get only the first 4 products
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <div className="popular-products-heading">
                <h1>Popular</h1>
                <h2>Our top-selling products that you may like</h2>
            </div>

            <div className="Products">
                {products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`} className="product-link">
                        <div className="Product-card">
                            <img src={product.image} alt={product.name} />
                            <h1>{product.name}</h1>
                            <p className="price">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;
