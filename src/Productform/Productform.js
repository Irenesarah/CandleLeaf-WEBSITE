import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, InputNumber, message } from "antd";
import axios from "axios";

export const ProductForm = ({
  isModalOpen,
  setIsModalOpen,
  fetchProducts,
  editingProduct,
}) => {
  const [form] = Form.useForm();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
      form.setFieldsValue(editingProduct); 
    } else {
        form.resetFields(); 
      }
  }, [editingProduct, form]);

  const handleFieldChange = (changedValues) => {
    setProduct({
      ...product,
      ...changedValues,
    });
  };

  const handleSubmit = async (values) => {
    const url = editingProduct
      ? `http://localhost:8000/product/${editingProduct.id}`
      : "http://localhost:8000/product"; 
    const method = editingProduct ? "put" : "post"; 

    try {
      const response = await axios[method](url, values);
      message.success(
        editingProduct ? "Product updated successfully!" : "Product created successfully!"
      );
      fetchProducts(); 
      setIsModalOpen(false); 
    } catch (error) {
      message.error("Error saving product");
    }
  };

  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={editingProduct ? "Edit Product" : "Create Product"}
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      destroyOnClose={true}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={product}
        onValuesChange={handleFieldChange}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: "Please input the product name!" }]}
        >
          <Input placeholder="Product Name" />
        </Form.Item>

        <Form.Item
          name="price"
          label="Product Price"
          rules={[{ required: true, message: "Please input the product price!" }]}
        >
          <InputNumber
            min={0}
            step={0.01}
            placeholder="Product Price"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Product Description"
          rules={[{ required: true, message: "Please input the product description!" }]}
        >
          <Input.TextArea placeholder="Product Description" rows={4} />
        </Form.Item>

        <Form.Item name="image" label="Product Image URL">
          <Input placeholder="Product Image URL" />
        </Form.Item>

        <div className="form-footer">
          <Button onClick={handleCancel} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            {editingProduct ? "Update" : "Create"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
