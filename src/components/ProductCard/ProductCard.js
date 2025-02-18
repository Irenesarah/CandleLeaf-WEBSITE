import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; 

const ProductCard = ({ product }) => {
  console.log("Product Data: ", product);
  if (!product || !product.id) {
    return <div>No product data available</div>;
  }

  return (
    <div>    
     

    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="Product-card">
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <p className="price"> ${product.price}</p>
        </div>
      </Link>
    </div>
    </div>

  );
};

export default ProductCard;
