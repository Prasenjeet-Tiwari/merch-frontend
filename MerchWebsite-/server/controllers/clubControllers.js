import { prisma } from "../app.js";

// Create a new club
export const createClub = async (req, res) => {
  try {
    const { id,  name, slug, description } = req.body;
    const club = await prisma.club.create({
      data: { id, name, slug, description },
    });
    res.status(201).json(club);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all clubs
export const getClubs = async (req, res) => {
  try {
    const clubs = await prisma.club.findMany({
      include: { products: true },
    });
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single club by ID
export const getClubById = async (req, res) => {
  try {
    const { id } = req.params;
    const club = await prisma.club.findUnique({
      where: { id: Number(id) },
      include: { products: true },
    });
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.json(club);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get a single club by Name
export const getClubByName = async (req, res) => {
  try {
    const { name } = req.params;
    const club = await prisma.club.findUnique({
      where: { name: name },
      include: { products: true },
    });
    if (!club) return res.status(404).json({ error: "Club not found" });
    res.json(club);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a club
export const updateClub = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, description } = req.body;
    const club = await prisma.club.update({
      where: { id: Number(id) },
      data: { name, slug, description },
    });
    res.json(club);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a club
export const deleteClub = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.club.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Club deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};