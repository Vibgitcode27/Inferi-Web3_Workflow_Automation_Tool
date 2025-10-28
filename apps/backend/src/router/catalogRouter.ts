import { Router } from "express";
import { authMiddleware } from "../middlewares";
import { prisma } from "./userRouter";

const router = Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    console.log("Reached Here : - ");
    const available_actions = await prisma.availableActions.findMany({});
    const available_triggers = await prisma.availableTrigger.findMany({});
    const response = { available_actions, available_triggers };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching feris:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/triggers", authMiddleware, async (req, res) => {
  try {
    const available_triggers = await prisma.availableTrigger.findMany({});
    res.status(200).json(available_triggers);
  } catch (error) {
    console.error("Error fetching feris:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/actions", authMiddleware, async (req, res) => {
  try {
    const available_actions = await prisma.availableActions.findMany({});
    res.status(200).json(available_actions);
  } catch (error) {
    console.error("Error fetching feris:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const catalogRouter = router;
