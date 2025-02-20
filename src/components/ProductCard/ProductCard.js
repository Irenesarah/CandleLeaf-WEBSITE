import React from "react";
import {Link} from "react-router-dom";
import "./ProductCard.css"



export const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        {product.image ? (
          <img
            className="products-image"
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className= "placeholder-box" />  
         
        )}
       
        <div className="product-card-details">
          <p>{product.name}</p>
 
          <h4>${product.price}</h4>
        </div>
      </div>
    </Link>
  );
};
 