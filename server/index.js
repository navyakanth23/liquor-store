const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // parse JSON bodies

// Routes
app.get('/api/products', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM products');
  res.json(rows);
});

app.post('/api/products', async (req, res) => {
  const { name, type, price } = req.body;
  const { rows } = await db.query(
    'INSERT INTO products (name, type, price) VALUES ($1, $2, $3) RETURNING *',
    [name, type, price]
  );
  res.json(rows[0]);
});

app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, type, price } = req.body;
  const { rows } = await db.query(
    'UPDATE products SET name = $1, type = $2, price = $3 WHERE id = $4 RETURNING *',
    [name, type, price, id]
  );
  res.json(rows[0]);
});

app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM products WHERE id = $1', [id]);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});