import { prisma } from "../../server/app.js";


export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await prisma.user.create({
      data: { name, email, password },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { orders: true }, 
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
