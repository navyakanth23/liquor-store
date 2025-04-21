import React, { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';

function Inventory() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Vodka', type: 'Vodka', price: 25 },
    { id: 2, name: 'Whiskey', type: 'Whiskey', price: 40 },
  ]);

  const [formData, setFormData] = useState({ name: '', type: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price)
    };
    setProducts(prev => [...prev, newProduct]);
    setFormData({ name: '', type: '', price: '' });
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setEditId(product.id);
    setFormData({ name: product.name, type: product.type, price: product.price });
  };

  const handleUpdate = () => {
    const updated = products.map(p =>
      p.id === editId ? { ...p, ...formData, price: parseFloat(formData.price) } : p
    );
    setProducts(updated);
    setIsEditing(false);
    setEditId(null);
    setFormData({ name: '', type: '', price: '' });
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Container className="mt-4">
      <h2>Inventory Management</h2>

      <Form className="my-4">
        <Form.Group className="mb-2">
          <Form.Control
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            name="type"
            placeholder="Product Type"
            value={formData.type}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            name="price"
            placeholder="Price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>
        {isEditing ? (
          <Button variant="warning" onClick={handleUpdate}>Update Product</Button>
        ) : (
          <Button variant="success" onClick={handleAdd}>Add Product</Button>
        )}
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.type}</td>
              <td>{p.price}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => handleEdit(p)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(p.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Inventory;
