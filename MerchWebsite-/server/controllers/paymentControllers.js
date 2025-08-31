import Stripe from "stripe";
import dotenv from "dotenv";
import { prisma } from "../app.js";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { items } = req.body; // from Postman, send array of { productId, name, price, quantity }

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Stripe paisa MEIN UNIT rakha h
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://example.com/cancel",
      metadata: {
      cart: JSON.stringify(items.map((item)=>({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price
      }))),
      userId: req.userid
    }
    });

    res.json({ id: session.id, url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const userId = req.userid;
      const cartItems = JSON.parse(session.metadata.cart);

      // ✅ Create order with nested orderItems in one go
      const order = await prisma.order.create({
        data: {
          userId,
          total: session.amount_total / 100,
          status: "CONFIRMED",
          items: {
            create: cartItems.map((item) => ({
              quantity: item.quantity,
              price: item.price,
              productId: item.productId,
              userId,
            })),
          },
        },
        include: {
          items: true, // fetch order items in response
        },
      });

      return res.json({ success: true, message: "Order confirmed", order });
    } else {
      return res.json({ success: false, message: "Payment not completed" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
