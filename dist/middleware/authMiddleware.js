import { AuthChainFactory } from "../auth/AuthChainFactory.js";
import { AuthChainType } from "../models/enums/AuthChainType.js";
//Middleware to process authentication using cookies. Ensures the authentication chain is applied 
export function cookieAuthMiddleware(req, res, next) {
    // Create a cookie-based authentication handler
    const authHandler = AuthChainFactory.create(AuthChainType.FULL);
    // Process authentication using the handler chain
    authHandler.handle(req, res);
    // Move to the next middleware
    next();
}
//# sourceMappingURL=authMiddleware.js.map