import { CookieHandler } from "./CookieHandler.js";
export class PlayerCookieHandler extends CookieHandler {
    // Processes the player cookie logic
    process(req, res) {
        // Check if the player token cookie is missing
        if (!req.cookies?.playerToken) {
            res.cookie("playerToken", this.generateToken(), { httpOnly: true });
            console.log("PlayerCookieHandler: Set playerToken cookie");
        }
    }
    // Generates a random token string
    generateToken() {
        return Math.random().toString(36).substring(2, 15);
    }
}
//# sourceMappingURL=PlayerCookieHandler.js.map