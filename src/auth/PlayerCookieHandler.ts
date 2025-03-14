import { CookieHandler } from "./CookieHandler"; 

export class PlayerCookieHandler extends CookieHandler {
  // Processes the player cookie logic
  protected process(req: any, res: any): void {
    // Check if the player token cookie is missing
    if (!req.cookies?.playerToken) {
      res.cookie("playerToken", this.generateToken(), { httpOnly: true });
      console.log("PlayerCookieHandler: Set playerToken cookie");
    }
  }

  // Generates a random token string
  private generateToken(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
