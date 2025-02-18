import React, { useEffect } from "react";
import axios from "axios";
import { Modal, message, Form, Input, Button, InputNumber } from "antd";

const ProductForm = ({
  isModalOpen,
  setIsModalOpen,
  fetchProducts,
  editingProduct,
}) => {
  const [form] = Form.useForm();

  // Set initial values in the form if editing a product
  useEffect(() => {
    if (editingProduct) {
      form.setFieldsValue({
        name: editingProduct.name,
        price: editingProduct.price,
        description: editingProduct.description,
        image: editingProduct.image,
      });
    } else {
      form.resetFields(); // Reset the form when creating a new product
    }
  }, [editingProduct, form]);

  const handleCancel = () => {
    setIsModalOpen(false); // Close modal when cancel button is clicked
  };

  const handleSubmit = async (values) => {
    try {
      if (editingProduct) {
        // Update the product using PUT request
        await axios.put(
          `http://localhost:8000/product/${editingProduct.id}`, // Correctly include product ID
          values
        );
        message.success("Product updated successfully!");
      } else {
        // Create a new product using POST request
        await axios.post("http://localhost:8000/product", values);
        message.success("Product created successfully!");
      }
      fetchProducts(); // Refetch products to reflect the changes
      setIsModalOpen(false); // Close the modal after submitting
    } catch (error) {
      message.error("Error saving product");
    }
  };

  return (
    <Modal
      title={editingProduct ? "Edit Product" : "Create Product"}
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null} // Custom footer to handle buttons
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ name: "", price: "", description: "", image: "" }}
      >
        <Form.Item
          name="name"
          label="Product Name"
          rules={[{ required: true, message: "Please enter product name" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter product price" }]}>
          <InputNumber min={0} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="image" label="Image URL">
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Product Description"
          rules={[{ required: true, message: "Please enter product description" }]}>
          <Input.TextArea rows={4} />
        </Form.Item>

        <div className="form-actions">
          <Button type="default" onClick={handleCancel}>
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

export default ProductForm;
