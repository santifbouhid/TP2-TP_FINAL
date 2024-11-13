import express from "express";
import RecipesRouter from "./routes/recipes.router.js";
import config from "./config.js";
import UsersRouter from "./routes/users.router.js";

const app = express();
const PORT = config.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/recipes", new RecipesRouter().start());
app.use("/users", new UsersRouter().start())

app.listen(PORT, () =>
  console.log(`Servidor corriendo en: http://localhost:${PORT}`)
);
app.on("Error", (err) =>
  console.error("Hubo un problema con el servidor", err)
);




