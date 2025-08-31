import { prisma } from "../app.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { clubcode } = req.params;

    const lastProduct = await prisma.product.findFirst({
      where: { clubId: clubcode },
      orderBy: { id: "desc" },
    });

    let newid;
    if (!lastProduct) {
      newid = clubcode + "001";
    } else {
      const lastNumber = parseInt(lastProduct.id.replace(clubcode, ""), 10);
      const nextNumber = lastNumber + 1;
      newid = clubcode + String(nextNumber).padStart(3, "0");
    }

    const { name, description, price, orderImages } = req.body;
    const product = await prisma.product.create({
      data: {
        id: newid,
        name,
        description,
        price,
        clubId: clubcode,
        orderImages: orderImages || []
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    const product = await prisma.product.update({
      where: { id },
      data: { name, description, price, stock },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: { id },
    });
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};