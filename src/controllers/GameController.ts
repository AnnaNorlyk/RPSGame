import { Request, Response } from "express";
import { GameService } from "../services/GameService.js";
import { Hand } from "../models/enums/Hand.js";

const gameService = new GameService();

// Retrieves the player's auth token from cookies
// Uses a default token if not found
function _getAuthToken(req: Request): string {
  return req.cookies.playerToken || "default";
}

// Validates if the given hand is a valid choice (rps)
function _validateHand(handParam?: string): Hand | null {
  if (!handParam) return null;
  const upperHand = handParam.toUpperCase();
  return upperHand in Hand ? (Hand[upperHand as keyof typeof Hand]) : null;
}

// Starts a new game for the player
export function startGame(req: Request, res: Response): void {
    console.log("startGame endpoint hit"); // TEMP LOG
  const authToken = _getAuthToken(req);
  const status = gameService.startGame(authToken);
  res.json({ message: "Game started!", status });
}

export function playRound(req: Request, res: Response): Response | void {
    const authToken = _getAuthToken(req);
    const playerHand = _validateHand(req.query.hand as string);
  
    // If the player's hand is invalid, return an error response
    if (!playerHand) {
      return res.status(400).json({ error: "Invalid hand. Please use ROCK, PAPER, or SCISSORS." });
    }
  
    const status = gameService.playRound(authToken, playerHand);
    res.json({ message: "Played: " + playerHand + ".", status });
  }
  

// Stops the current game and returns the final status
export function stopGame(req: Request, res: Response): void {
  const authToken = _getAuthToken(req);
  const status = gameService.stopGame(authToken);
  res.json({ message: "Game stopped.", status });
}
