import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, InputNumber, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    setProduct({ name: "", price: "", description: "", image: "" });
    }
  }, [editingProduct, form]);
     

  const handleFieldChange = (changedValues) => {
    setProduct({
      ...product,
      ...changedValues,
    });
  };

// const handleSubmit = async (values) => {
//     try {
//       if (editingProduct) {
//         // Update Existing Product (PUT request)
//         await axios.put(`http://localhost:8000/product/${editingProduct.id}`, values);
//         alert("Product updated successfully!"); // Show success alert
//       } else {
//         // Create New Product (POST request)
//         await axios.post("http://localhost:8000/product", values);
//         alert("Product added successfully!"); // Show success alert
//       }
  
//       fetchProducts(); // Refresh product list immediately
//       setIsModalOpen(false); //Close the modal after submission
//     } catch (error) {
//       console.error("Error saving product:", error);
//       message.error("Failed to save product."); //Show error alert
//     }
//   };



const navigate = useNavigate(); 

const handleSubmit = async (values) => {
  try {
    if (editingProduct) {
      await axios.put(`http://localhost:8000/product/${editingProduct.id}`, values);

      

      alert(" Product updated successfully!");
    } else {
      const response = await axios.post("http://localhost:8000/product", values);


      alert("Product added successfully!");
    }

    setIsModalOpen(false); 
    fetchProducts()
  } catch (error) {
    console.error("Error saving product:", error);
    message.error("Failed to save product.");
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
