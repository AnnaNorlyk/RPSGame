import { CookieHandler } from "./CookieHandler.js";

export class ScoreCookieHandler extends CookieHandler {
  // Processes the score cookie logic
  protected process(req: any, res: any): void {
    if (!req.cookies?.scoreToken) {
      res.cookie("scoreToken", this.generateToken(), { httpOnly: true });
      console.log("ScoreCookieHandler: Set scoreToken cookie");
    }
  }

  // Generates a random token string
  private generateToken(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
