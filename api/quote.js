const quotes = require('../quotes.json');

module.exports = (req, res) => {
  const random = Math.floor(Math.random() * quotes.length);
  res.status(200).json({ quote: quotes[random] });
};
