const express = require("express");

const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/todo", todoRoutes);
app.use("/api/v1/auth", authRoutes);

module.exports = app;
