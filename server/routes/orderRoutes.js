import express from 'express';

const router = express.Router();

// POST /api/orders
router.post('/', (req, res) => {
  console.log('Order received', req.body);
  // In a real app you'd store this in a DB and email yourself/customer.
  res.json({ message: 'Order received. We will follow up with payment instructions.' });
});

export default router;
