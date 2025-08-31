import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../app.js";

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const signToken = (userid) => {
  return jwt.sign({ userid }, process.env.SECRET, {
    expiresIn: "90d",
  });
};

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new AppError("Not logged in!", 401);
    }
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userid },
    });
    if (!user) {
      throw new AppError("User no longer exists.", 401);
    }
    req.userid = decoded.userid;
    req.user = user;
    next();
  } catch (err) {
    res.status(err.statusCode || 401).json({
      status: "failed",
      message: err.message || "Unauthorized",
    });
  }
};

const signup = async (req, res) => {
  try {
    const { email, name, password, passwordConfirm } = req.body;
    if (password !== passwordConfirm) {
      throw new AppError("Passwords do not match!", 400);
    }
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new AppError("User already exists, please sign in!", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: { email, name, password: hashedPassword },
    });
    const token = signToken(newUser.id);
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 90 * 24 * 60 * 60 * 1000,
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    res.status(err.statusCode || 400).json({
      status: "failed",
      message: err.message || "Signup failed",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new AppError("Invalid email or password!", 401);
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new AppError("Invalid email or password!", 401);
    }
    const token = signToken(user.id);
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "Lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 90 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(err.statusCode || 400).json({
      status: "failed",
      message: err.message || "Login failed",
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "Lax",
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({
    status: "success",
    message: "Logged out successfully",
  });
};

const getUserInfo = [protect, (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.user,
  });
}];

export {
  protect,
  signup,
  login,
  logout
}