import { Router } from "express";
import { authMiddleware } from "../middlewares";
import { FeriCreateSchema, EditFeriCreateSchema } from "../types";
import { prisma } from "./userRouter";

const router = Router();

//create a new feri
router.post("/", authMiddleware, async (req, res) => {
  const body = req.body;
  const parsedBody = FeriCreateSchema.safeParse(body);
  if (!parsedBody.success) {
    console.error("Validation error:", parsedBody.error);
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  await prisma.feri.create({
    data: {
      name: parsedBody.data.name,
      status: parsedBody.data.status,
      user: {
        connect: { id: req.id },
      },
    },
  });

  res.json({ message: "Feri created" });
});

//edit a feri
router.put("/:feriId", authMiddleware, async (req, res) => {
  console.log("Received update request:", req.body);

  const body = req.body;
  const parsedBody = EditFeriCreateSchema.safeParse(body);
  if (!parsedBody.success) {
    console.error("Validation error:", parsedBody.error);
    res.status(400).json({ error: "Invalid request data" });
    return;
  }

  await prisma.feri.update({
    where: {
      id: req.params.feriId,
    },
    data: {
      name: parsedBody.data.name,
      status: parsedBody.data.status,
      trigger: {
        create: {
          availableTriggerId: parsedBody.data.trigger.availableTriggerId,
        },
      },
      action: {
        create: parsedBody.data.actions.map((action, index) => ({
          availableActionId: action.availableActionId,
          sortingOrder: index,
        })),
      },
    },
  });
  res.json({ message: "Feri updated" });
});

// Get all feris
router.get("/", authMiddleware, async (req, res) => {
  try {
    const response = await prisma.feri.findMany({
      where: {
        userId: req.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        trigger: {
          include: {
            type: true,
          },
        },
        action: {
          include: {
            type: true,
          },
        },
        FeriRuns: {
          include: {
            feriOutbox: true,
          },
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching feris:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a single feri
router.get("/:feriId", authMiddleware, async (req, res) => {
  try {
    const response = await prisma.feri.findUnique({
      where: {
        userId: req.id,
        id: req.params.feriId,
      },
      include: {
        user: true,
        trigger: {
          include: {
            type: true,
          },
        },
        action: {
          include: {
            type: true,
          },
        },
        FeriRuns: {
          include: {
            feriOutbox: true,
          },
        },
      },
    });
    if (response === null) {
      res.status(404).json({ error: "Feri not found" });
      return;
    }
    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching feris:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export const feriRouter = router;
