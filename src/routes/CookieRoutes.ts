import { Router } from "express";

const router = Router();

// ✅ Route to set a test cookie
router.get("/set-cookie", (req, res) => {
  res.cookie("testCookie", "cookieValue123", { httpOnly: true });
  res.json({ message: "Cookie has been set!" });
});

// ✅ Route to check if the test cookie is received
router.get("/get-cookie", (req, res) => {
  const cookie = req.cookies.testCookie;
  if (cookie) {
    res.json({ message: "Cookie received!", cookie });
  } else {
    res.status(400).json({ error: "No cookie found!" });
  }
});

export default router;
