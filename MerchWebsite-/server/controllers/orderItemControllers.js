import { prisma } from "../app.js";

// Create a new order item
export const createOrderItem = async (req, res) => {
  try {
    const { quantity, price, orderId, productId, userId } = req.body;
    const orderItem = await prisma.orderItem.create({
      data: { quantity, price, orderId, productId, userId },
    });
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all order items
export const getOrderItems = async (req, res) => {
  try {
    const orderItems = await prisma.orderItem.findMany({
      include: { order: true, product: true, user: true },
    });
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single order item by ID
export const getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderItem = await prisma.orderItem.findUnique({
      where: { id: Number(id) },
      include: { order: true, product: true, user: true },
    });
    if (!orderItem) return res.status(404).json({ error: "Order item not found" });
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an order item
export const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity, price } = req.body;
    const orderItem = await prisma.orderItem.update({
      where: { id: Number(id) },
      data: { quantity, price },
    });
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an order item
export const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.orderItem.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Order item deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};