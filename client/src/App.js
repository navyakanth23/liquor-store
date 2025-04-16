import React from 'react';
import NavigationBar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const sampleProducts = [
  {
    id: 1,
    name: "Jack Daniel's Old No. 7",
    type: "Whiskey",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1615484477689-1c7fbd2c227c?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    name: "Grey Goose Vodka",
    type: "Vodka",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1610647598058-cd012b7b73f2?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Patrón Silver Tequila",
    type: "Tequila",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1618761714320-cfa2e81d8484?auto=format&fit=crop&w=500&q=60"
  }
];

function App() {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <h2 className="mb-4">Featured Products</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {sampleProducts.map(product => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
