import express from "express";
import RecipesRouter from "./routes/recipes.router.js";
import UsersRouter from "./routes/users.router.js";
import config from "./config.js";
import MongoConnection from "./models/MongoConnection.js"


const app = express();
const PORT = config.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/recipes", new RecipesRouter().start());
app.use("/users", new UsersRouter().start())

await MongoConnection.connect()
app.listen(PORT, () =>
  console.log(`Servidor corriendo en: http://localhost:${PORT}`)
);

await MongoConnection.connect()
app.on("Error", (err) =>
  console.error("Hubo un problema con el servidor", err)
);




