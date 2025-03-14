export interface ICookieHandler {
    setNext(handler: ICookieHandler): ICookieHandler;
    handle(req: any, res: any): void;
  }
  