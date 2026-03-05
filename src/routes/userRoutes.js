const express = require("express");
const router = express.Router();

let users = [];
let _id = 1;

router.get("/", (req, res) => res.json(users));

router.post("/", (req, res) => {
  const user = { id: _id++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Usuario no encontrado" });

  users[index] = { ...users[index], ...req.body, id };
  res.json(users[index]);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1)
    return res.status(404).json({ error: "Usuario no encontrado" });

  users.splice(index, 1);
  res.json({ success: true, deletedId: id });
});

module.exports = router;
