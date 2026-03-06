import { Router, Request, Response } from "express";
import { User } from "../models/user";

const router = Router();
let users: User[] = [];
let _id = 1;

router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

router.post("/", (req: Request, res: Response) => {
  const { email, password, name, birthDate } = req.body;

  const newUser: User = {
    id: _id++,
    email,
    password,
    name,
    birthDate,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Usuario no encontrado" });

  users[index] = { ...users[index], ...req.body, id };
  res.json(users[index]);
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Usuario no encontrado" });

  users.splice(index, 1);
  res.status(204).send();
});

export default router;
