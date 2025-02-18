import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch product details from backend
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/product/${id}`);
      setProduct(response.data); // API returns a single product object
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Show loading or error message if product is not found
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
        <p className="free-shipping">🚛 FREE SHIPPING</p>
      </div>

      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">${product.price}</p>

        <div className="quantity">
          <label>Quantity</label>
          <div className="quantity-box">
            <button>-</button>
            <input type="number" value="1" readOnly />
            <button>+</button>
          </div>
        </div>

        <button className="add-to-cart">🛒 + Add to cart</button>

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

export default ProductDetails;
