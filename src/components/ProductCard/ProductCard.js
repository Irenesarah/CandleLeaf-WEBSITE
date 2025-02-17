import React from "react";
import "./ProductCard.css"; 
import {products} from "../Products/Products"; 
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <div>
            <header className="ProductHeading">
                <h1>Products</h1>
                <h2>Order it for yourself or your beloved ones</h2>
            </header>

            <div className="Products">
                {products.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`} className="product-link">
                        <div className="Product-card">
                            <img src={product.image} alt={product.name} />
                            <h1>{product.name}</h1>
                            <p>{product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
