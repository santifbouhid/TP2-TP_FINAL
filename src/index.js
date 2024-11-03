import express from "express";
import RecipesRouter from "./routes/recipes.router.js";

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", new RecipesRouter().start());

app.listen(PORT, () =>
  console.log(`Servidor corriendo en: http://localhost:${PORT}`)
);
app.on("Error", (err) =>
  console.error("Hubo un problema con el servidor", err)
);




