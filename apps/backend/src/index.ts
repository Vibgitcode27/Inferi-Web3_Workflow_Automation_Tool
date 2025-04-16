import cors from "cors";
import express from "express";
import { userRouter } from "./router/userRouter";
import { feriRouter } from "./router/feriRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/feri", feriRouter);

app.listen(8020, () => {
  console.log("Server is running on http://localhost:8020");
});
