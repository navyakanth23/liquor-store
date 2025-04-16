import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const sampleProducts = [/* same as before */];

function Home() {
  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} md={3} className="g-4">
        {sampleProducts.map(product => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
