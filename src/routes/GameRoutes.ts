import { Router } from "express";
import { startGame, playRound, stopGame } from "../controllers/GameController.js";


const router = Router();

router.get("/start", startGame);
router.get("/play", playRound);
router.get("/stop", stopGame);

export default router;
