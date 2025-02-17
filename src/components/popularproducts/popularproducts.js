import React from "react";
import "./popularproducts.css"
import { Link } from "react-router-dom";
import {products} from "../Products/Products";


const PopularProducts = () => {
    return (
        <div>
            <div className="popular-products-heading">
                <h1>Popular</h1>
                <h2>Our top selling product that you may like</h2>
                </div>
               

            <div className="Products">
            {products.slice(0, 4).map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`} className="product-link">
                        <div className="Product-card">
                            <img src={product.image} alt={product.name} />
                            <h1>{product.name}</h1>
                            <p>${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularProducts;