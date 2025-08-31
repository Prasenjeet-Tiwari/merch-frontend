import express from "express";
import {
  createOrderItem,
  getOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
} from "../controllers/orderItemControllers.js";

const orderItemRouter = express.Router();

orderItemRouter.post("/", createOrderItem);
orderItemRouter.get("/", getOrderItems);
orderItemRouter.get("/:id", getOrderItemById);
orderItemRouter.put("/:id", updateOrderItem);
orderItemRouter.delete("/:id", deleteOrderItem);

export { orderItemRouter}