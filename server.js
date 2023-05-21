const express = require("express");
const app = express();
const taskRoutes = require("./app/routes/routes");
const port = 3000;

app.use(express.json());
app.use("/", taskRoutes);

app.listen(port, () => {
  console.log("Server is running on port ", port);
});
