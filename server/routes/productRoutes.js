import express from 'express';
import { readProducts } from '../utils/database.js';

const router = express.Router();

// GET /api/products
router.get('/', async (req, res) => {
  const products = await readProducts();
  res.json(products);
});

export default router;
