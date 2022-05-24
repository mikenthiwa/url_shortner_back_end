import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv"
import createLink from "./createLink";
import getLinks from "./getLinks";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 4000;

// Body parsing Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    await getLinks(req, res)
  }
);


app.post('/create', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  await createLink(req, res)
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
