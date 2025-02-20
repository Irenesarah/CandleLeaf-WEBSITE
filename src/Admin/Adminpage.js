import React, { useState, useEffect } from "react";
import { Table, Button, Space, message } from "antd";
import axios from "axios";
import "./Adminpage.css";
import {ProductForm} from "../Productform/Productform";
import {deleteProduct} from '../components/Apis/DeleteApi'


export const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = () => {
    setEditingProduct(null); 
    setIsModalOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product); 
    setIsModalOpen(true); 
    
    
  };

  // Delete Product
//   const handleDelete = async (id) => {
//     Modal.confirm({
//       title: "Are you sure you want to delete this product?",
//       onOk: async () => {
//         try {
//           await axios.delete(`http://localhost:8000/product/${id}`);
//           message.success("Product deleted successfully");
//           fetchProducts(); // Refetch the products after deletion
//         } catch (error) {
//           message.error("Failed to delete product");
//         }
//       },
//     });
//   };/

const handleDelete = async (productId, productName, setProduct) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${productName}?`);
  
    if (confirmDelete) {
      try {
        await deleteProduct(productId);
        
        fetchProducts(); 
      } catch (error) {
        console.error(" Error in deleting product:", error);
        message.error("Failed to delete product.");
      }
    }
  };

  const columns = [
    {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: (image, record) =>
          image ? (
            <img
              src={image}
              alt={record.name}
              width={50}
              height={50}
              style={{ borderRadius: "5px" }}
            />
          ) : (
            <div
              className="admin-placeholder-box"
              style={{ width: 50, height: 50, background: "#ddd" }}
            />
          ),
      },
  
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button className="Editbutton" type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button className="Deletebutton" type="danger" onClick={() => handleDelete(record.id,record.name)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Page</h1>
      <Button type="primary" className="create-button" onClick={handleCreate}>
        Create Product
      </Button>
      <Table columns={columns} dataSource={products} rowKey="id" />

      {/* Product Form Modal */}
      <ProductForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        fetchProducts={fetchProducts}
        editingProduct={editingProduct}
      />
    </div>
  );
};



