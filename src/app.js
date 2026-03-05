const express = require("express");
const { checkGlobalAuth, restrictWriteAccess } = require("./middleware/auth");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Middlewares de seguridad
app.use(checkGlobalAuth);
app.use(restrictWriteAccess);

// Rutas con prefijo
app.use("/api/v1/users", userRoutes);

module.exports = app;
