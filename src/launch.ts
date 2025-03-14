import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

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
  res.send("Hello from the standalone Express server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
