import { CookieHandler } from "./CookieHandler.js";
export class ScoreCookieHandler extends CookieHandler {
    // Processes the score cookie logic
    process(req, res) {
        if (!req.cookies?.scoreToken) {
            res.cookie("scoreToken", this.generateToken(), { httpOnly: true });
            console.log("ScoreCookieHandler: Set scoreToken cookie");
        }
    }
    // Generates a random token string
    generateToken() {
        return Math.random().toString(36).substring(2, 15);
    }
}
//# sourceMappingURL=ScoreCookieHandler.js.map