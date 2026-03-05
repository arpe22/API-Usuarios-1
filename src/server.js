const app = require("./app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `\n\x1b[36m[SYSTEM]\x1b[0m API running on http://localhost:${PORT}`,
  );
  console.log(
    `\x1b[36m[SYSTEM]\x1b[0m Endpoint: http://localhost:${PORT}/api/v1/users`,
  );
});
