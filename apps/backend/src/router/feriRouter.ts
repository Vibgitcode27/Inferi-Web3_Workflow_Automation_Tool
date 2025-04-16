import { Router } from "express";
import { authMiddleware } from "../middlewares";

const router = Router();

router.post("/", authMiddleware, (req, res) => {
  console.log("Received create request:", req.body);
  res.json({ message: "Feri created" });
});

router.get("/", authMiddleware, (req, res) => {
  console.log("Received get all feri request:", req.body);
  res.json({ message: "Feri sent" });
});

router.get("/:feriId", authMiddleware, (req, res) => {
  console.log("Received create request:", req.body);
  res.json({ message: "Feri created" });
});

export const feriRouter = router;
