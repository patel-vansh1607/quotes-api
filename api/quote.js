import quotes from '../quotes.json';

export default function handler(req, res) {
  const random = Math.floor(Math.random() * quotes.length);
  res.status(200).json({ quote: quotes[random] });
}
