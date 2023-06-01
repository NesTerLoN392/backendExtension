const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const initModels = require("./models/initModels");
const db = require("./utils/database");
const userRoutes = require("./routes/users.routes");
const ipsRoutes = require("./routes/ips.routes");
initModels();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 9000;

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

db.sync({ alter: true }) // alterar los atributos
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

app.use(userRoutes);
app.use(ipsRoutes);

app.get("/", (req, res) => {
  res.send(
    "Bienvenidos a Ecommerce Documentacion: https://documenter.getpostman.com/view/25958966/2s93RUuC2b"
  );
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
