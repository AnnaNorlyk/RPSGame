import { ICookieHandler } from "../interfaces/ICookieHandler.js";
import { PlayerCookieHandler } from "./PlayerCookieHandler.js";
import { ScoreCookieHandler } from "./ScoreCookieHandler.js";
import { AuthChainType } from "../enums/AuthChainType.js";
import { CookieHandler } from "./CookieHandler.js";


export class AuthChainFactory {
  // Creates an authentication chain handler based on the type given
  public static create(type: AuthChainType): ICookieHandler {
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
