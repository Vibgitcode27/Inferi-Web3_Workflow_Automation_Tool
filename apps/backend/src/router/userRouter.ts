import { Router } from "express";
import { authMiddleware } from "../middlewares";
import { LoginSchema, SignUpSchema } from "../types";
import * as jwt from "jsonwebtoken";
import { PrismaClient } from "../../../../packages/database/generated/client";

const router = Router();
export const prisma = new PrismaClient();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const parsedData = LoginSchema.safeParse({ email, password });
  if (!parsedData.success) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  const userData = await prisma.user.findUnique({
    where: {
      email: parsedData.data.email,
    },
  });
  if (!userData) {
    res.status(401).json({ message: "Invalid credentials" });
    return;
  }
  let token = jwt.sign({ id: userData.id, email: userData.email }, "Salt", {
    expiresIn: "1h",
  });

  console.log("Received login request:", req.body);
  res.json({ message: "User logged in", token: token });
});

router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const parsedData = SignUpSchema.safeParse({ email, password, name });
  if (!parsedData.success) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }
  try {
    let user = await prisma.user.create({
      data: {
        email: parsedData.data.email,
        password: parsedData.data.password,
        name: parsedData.data.name,
      },
    });
    if (!user) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    let token = jwt.sign({ id: user.id, email: user.email }, "Salt", {
      expiresIn: "1h",
    });
    res.json({ message: "User registered", token: token });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/", authMiddleware, (req, res) => {
  console.log("Received user request:", req.body);
  res.json({ message: "User data" });
});

export const userRouter = router;
