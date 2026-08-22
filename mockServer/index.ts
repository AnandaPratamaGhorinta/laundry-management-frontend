import express, { Request, Response } from "express";

const app = express();
const PORT = "4000";
app.get("/users", (request: Request, response: Response) => {
  response.json([
    { id: 546, username: "John" },
    { id: 894, username: "Mary" },
  ]);
});

app.delete("/users", (request: Request, response: Response) => {
  response.json({ result: "success" });
});

app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
