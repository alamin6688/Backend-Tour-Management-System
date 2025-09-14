import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";
import { globalErrorHandeler } from "./app/middlewares/globalErrorHandeler";
import notFound from "./app/middlewares/notFound";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to the Tour Management System Backend",
  });
});

app.use(globalErrorHandeler);

app.use(notFound)

export default app;
