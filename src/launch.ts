import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import cookieRoutes from "./routes/CookieRoutes.js";
import GameRoutes from "./routes/GameRoutes.js"

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));


// Test route.
app.get("/", (req, res) => {
  res.send("Welcome to Rock, Paper, Scissors!");
});

//cookie route 
app.use("/api/cookies", cookieRoutes);

//Game routes
app.use("/api/game", GameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
