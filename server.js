const express = require('express');
const cors = require('cors');
const quotes = require('./quotes.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[random] });
});

app.listen(PORT, () => {
  console.log(`🔥 Quote API running at http://localhost:${PORT}`);
});
