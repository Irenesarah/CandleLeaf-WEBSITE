import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    alert(`Added  ${product.name} to cart!`);
  };
  

  return (
    <div className="product-details">
      <div className="product-image">
        {product.image ? (
          <img
            className="product-detailed-image"
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className="product-placeholder-box"></div>
        )}
        <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
        <p className="free-shipping">🚛 FREE SHIPPING</p>
      </div>

      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price}</p>

        <div className="quantity">
          <label>Quantity</label>
          <div className="quantity-box">
            <button onClick={decreaseQuantity}>-</button>
            <input
              className="quantity-number"
              type="number"
              value={quantity}
              readOnly
            />
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>🛒 Add to cart </button>

        <div className="product-specs">
          <p><strong>Wax:</strong> Top-grade Soy wax that delivers a smokeless, consistent burn.</p>
          <p><strong>Fragrance:</strong> Premium quality ingredients with natural essential oils.</p>
          <p><strong>Burning Time:</strong> 70-75 hours</p>
          <p><strong>Dimension:</strong> 10cm x 5cm</p>
          <p><strong>Weight:</strong> 400g</p>
        </div>
      </div>
    </div>
  );
};

