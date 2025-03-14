import { PlayerCookieHandler } from "./PlayerCookieHandler";
import { ScoreCookieHandler } from "./ScoreCookieHandler";
import { AuthChainType } from "../enums/AuthChainType";
import { CookieHandler } from "./CookieHandler"; // Import the abstract base class

export class AuthChainFactory {
  // Creates an authentication chain handler based on the type given
  public static create(type: AuthChainType): CookieHandler {
    if (type === AuthChainType.PLAYER) return new PlayerCookieHandler();
    if (type === AuthChainType.SCORE) return new ScoreCookieHandler();

    if (type === AuthChainType.FULL) {
      const playerHandler = new PlayerCookieHandler();
      playerHandler.setNext(new ScoreCookieHandler());
      return playerHandler;
    }

    throw new Error("Invalid authentication type");
  }
}
