import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { routes } from "./routes";
import "./database";

const port = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    status: "Erro",
    message: "Internal server error",
  });
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}/`);
});
