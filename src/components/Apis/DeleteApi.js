import axios from "axios";
import { message } from "antd";

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/product/${id}`);
    message.success("Product deleted successfully!");
    
  } catch (error) {
    console.error(" Error deleting product:", error);
    message.error("Failed to delete product.");
  }
};


