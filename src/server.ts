import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`\x1b[35m[TS-SERVER]\x1b[0m Running on http://localhost:${PORT}`);
});
