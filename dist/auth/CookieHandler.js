export class CookieHandler {
    nextHandler;
    // Sets the next handler in the chain
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    // Handles the request and passes it to the next handler if set
    handle(req, res) {
        this.process(req, res);
        this.nextHandler?.handle(req, res);
    }
}
//# sourceMappingURL=CookieHandler.js.map