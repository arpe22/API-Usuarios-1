import express from "express";
import { checkGlobalAuth, restrictWriteAccess } from "./middleware/auth";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

app.use(checkGlobalAuth);
app.use(restrictWriteAccess);

app.use("/api/v1/users", userRoutes);

export default app;
