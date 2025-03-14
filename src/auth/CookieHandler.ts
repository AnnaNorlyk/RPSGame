export abstract class CookieHandler {
    protected nextHandler?: CookieHandler;
  
    // Sets the next handler in the chain
    public setNext(handler: CookieHandler): CookieHandler {
      return (this.nextHandler = handler);
    }
  
    // Handles the request and passes it to the next handler if set
    public handle(req: any, res: any): void {
      this.process(req, res);
      this.nextHandler?.handle(req, res);
    }
  
    // Abstract method to be implemented by subclasses
    protected abstract process(req: any, res: any): void;
  }
  