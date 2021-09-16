const express = require("express");
const cors = require("cors");

const db = require("./database");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (req, res) => {
  res.json({ message: "There's nothing to-do here!" })
});
app.use("/api", todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

