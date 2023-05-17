
// ------------------------- CHAIN OF RESPONSABILITY -------------------------

interface Handler {
  setNext(handler: Handler): Handler;
  handle (request: any);
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public async handle(request: any) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null
  }
}

class ValidateNameHandler extends AbstractHandler {
  public async handle(request: any) {
    if(!request.name) throw Error('Name Needed');
    if(request.name.length > 30) throw Error('Name size exceeded - limit 30 characters');

    return super.handle(request);

  }
}

class ValidateEmailHandler extends AbstractHandler {
  public async handle(request: any) {
    if(!request.email) throw Error('Email Needed');

    return super.handle(request);
  }
}

class ValidateImageHandler extends AbstractHandler {
  public async handle(request: any)  {
    if(!request.imageFile) throw Error('Image Needed');

    return super.handle(request);

  }
}

export class ValidadeAndSubmitFormChain {
  start (data: any) {
    const name = new ValidateNameHandler();
    const email = new ValidateEmailHandler();
    const image = new ValidateImageHandler();

    name.setNext(email).setNext(image)

    return name.handle(data);
  }
}

