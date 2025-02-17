
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

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <img src={image} alt="product" style={{ width: 50, height: 50 }} />,
    },
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record.id)}>
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
      <button className="create-table">Create Product</button>
      <Table columns={columns} dataSource={products} rowKey="id" />
    </div>
  );
};

export default AdminPage;
