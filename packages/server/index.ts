import express from "express";
import type { Request, Response } from "express";
import { messageService } from "./services/message.controller";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/api/message", (req: Request, res: Response) => {
  const message = messageService.getMessage();
  res.json(message);
});

const clientPath = path.join(process.cwd(), "client");
app.use(express.static(clientPath));

app.get(/^\/(?!api).*/, (req: Request, res: Response) => {
  res.sendFile(path.join(clientPath, "index.html"), (err) => {
    if (err) {
      res.status(500).send("Error loading the application");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
