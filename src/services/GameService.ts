import { GameStatus } from "../models/GameStatus.js";
import { Hand } from "../models/enums/Hand.js";  // 
import { Result } from "../models/enums/Result.js"; // 

export class GameService {
  // Stores game status for each player
  private playerStatuses: Map<string, GameStatus> = new Map();

  // Ensures a player exists in the game state
  private ensurePlayer(authToken: string): GameStatus {
    return this.playerStatuses.get(authToken) ?? this.startGame(authToken);
  }

  // Starts a new game for the player
  startGame(authToken: string): GameStatus {
    const status = new GameStatus();
    this.playerStatuses.set(authToken, status);
    return status;
  }

  // Plays a round 
  playRound(authToken: string, playerHand: Hand): GameStatus {
    const status = this.ensurePlayer(authToken);
    const serverHand = this.getRandomHand();
    const result = this.evaluateRound(playerHand, serverHand);

    // Update player status based on result
    if (result === Result.WIN) status.recordWin();
    else if (result === Result.LOSE) status.recordLoss();
    else status.recordDraw();

    return status;
  }

  // Stops the game and returns the final status
  stopGame(authToken: string): GameStatus {
    return this.ensurePlayer(authToken);
  }

  // Returns a random hand (Rock, Paper, or Scissors)
  private getRandomHand(): Hand {
    const hands = Object.values(Hand);
    return hands[Math.floor(Math.random() * hands.length)];
  }

  // Evaluates the winner of the round
  private evaluateRound(playerHand: Hand, serverHand: Hand): Result {
    if (playerHand === serverHand) return Result.DRAW;

    const winningCases: Record<Hand, Hand> = {
      [Hand.ROCK]: Hand.SCISSORS,
      [Hand.PAPER]: Hand.ROCK,
      [Hand.SCISSORS]: Hand.PAPER,
    };

    return winningCases[playerHand] === serverHand ? Result.WIN : Result.LOSE;
  }
}
