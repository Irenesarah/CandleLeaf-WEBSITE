<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Table, Button, Space, Modal, message } from "antd";
import axios from "axios";
import ProductForm from "../Productform/Productforms"; // Importing ProductForm component
import "./Adminpage.css";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch Products
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

  // Open Create Product Modal
  const handleCreate = () => {
    setEditingProduct(null); // No product to edit, hence null
    setIsModalOpen(true);
  };

  // Open Edit Product Modal
  const handleEdit = (product) => {
    setEditingProduct(product); // Set product to edit
    setIsModalOpen(true); // Open modal
  };

  // Delete Product
  const handleDelete = async (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this product?",
      onOk: async () => {
        try {
          await axios.delete(`http://localhost:8000/product/${id}`);
          message.success("Product deleted successfully");
          fetchProducts(); // Refetch the products after deletion
        } catch (error) {
          message.error("Failed to delete product");
        }
      },
    });
  };

  // Define Table Columns
=======

import React from "react";
import { Table, Button, Space } from "antd";
import { products } from "../components/Products/Products";
import "./Adminpage.css";

const AdminPage = () => {
  const handleEdit = (id) => {
    console.log(`Editing product with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting product with ID: ${id}`);
  };

>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
<<<<<<< HEAD
      render: (image) => (
        <img src={image} alt="product" style={{ width: 50, height: 50 }} />
      ),
=======
      render: (image) => <img src={image} alt="product" style={{ width: 50, height: 50 }} />,
>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97
    },
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
<<<<<<< HEAD
          <Button type="primary" onClick={() => handleEdit(record)}>
=======
          <Button type="primary" onClick={() => handleEdit(record.id)}>
>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Page</h1>
<<<<<<< HEAD
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
=======
      <button className="create-table">Create Product</button>
      <Table columns={columns} dataSource={products} rowKey="id" />
>>>>>>> 0e7bb88089f0bf9d8ff3a8f19e0a299c26853a97
    </div>
  );
};

export default AdminPage;
