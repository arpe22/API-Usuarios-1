const KEYS = {
  API_MASTER: "fha5HpDXSXSjKU0QCbdXiz1a",
  WRITE_TOKEN: "HIZe4D32twWOUP9h0I1IVTlr",
};

// Validación de entrada general
exports.checkGlobalAuth = (req, res, next) => {
  if (req.headers["authorization"] !== KEYS.API_MASTER) {
    return res.status(401).json({ error: "Acceso denegado: API Key inválida" });
  }
  next();
};

// Validación para POST, PUT, DELETE
exports.restrictWriteAccess = (req, res, next) => {
  const methodsToProtect = ["POST", "PUT", "DELETE"];

  if (methodsToProtect.includes(req.method)) {
    if (req.headers["token"] !== KEYS.WRITE_TOKEN) {
      return res
        .status(403)
        .json({ error: "Operación prohibida: Requiere token de escritura" });
    }
  }
  next();
};
