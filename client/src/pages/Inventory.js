import React, { useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';

function Inventory() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Vodka', type: 'Vodka', price: 25 },
    { id: 2, name: 'Whiskey', type: 'Whiskey', price: 40 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', type: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const id = Date.now(); // simple unique ID
    setProducts(prev => [...prev, { ...newProduct, id, price: parseFloat(newProduct.price) }]);
    setNewProduct({ name: '', type: '', price: '' });
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
            value={newProduct.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            name="type"
            placeholder="Product Type"
            value={newProduct.type}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            name="price"
            placeholder="Price"
            type="number"
            value={newProduct.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="success" onClick={handleAdd}>Add Product</Button>
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
