import { Request, Response, NextFunction } from "express";

const KEYS = {
  MASTER: "fha5HpDXSXSjKU0QCbdXiz1a",
  WRITE: "HIZe4D32twWOUP9h0I1IVTlr",
};

export const checkGlobalAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.headers["authorization"] !== KEYS.MASTER) {
    return res.status(401).json({ error: "Acceso denegado: API Key inválida" });
  }
  next();
};

export const restrictWriteAccess = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const methodsToProtect = ["POST", "PUT", "DELETE"];
  if (methodsToProtect.includes(req.method)) {
    if (req.headers["token"] !== KEYS.WRITE) {
      return res
        .status(403)
        .json({ error: "Operación prohibida: Requiere token de escritura" });
    }
  }
  next();
};
