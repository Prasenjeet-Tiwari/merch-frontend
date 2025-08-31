import { prisma } from "../app.js";

const createOrder = async (req, res) => {
  const userId = req.body.userid;
  const products = req.body.products;
  const quantity = req.body.quantity

  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ error: 'Products array is required and cannot be empty' });
  }

  try {
    const order = await prisma.order.create({
      data: {
        userId,
        orderItems: {
          create: products.map(({ productId, quantity }) => ({
            productId,
            quantity,
          })),
        },
      },
      include: {
        orderItems: true,
      },
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create order' });
  }
};

export {createOrder}