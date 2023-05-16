
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

class ValidateTitleHandler extends AbstractHandler {
  public async handle(request: any) {
    if(!request.title) throw Error('Title Needed');
    if(request.title.length > 30) throw Error('Title size exceeded - limit 30 characters');

    return super.handle(request);

  }
}

class ValidateDescriptionHandler extends AbstractHandler {
  public async handle(request: any) {
    if(!request.description) throw Error('Description Needed');
    if(request.description.length > 500) throw Error('Description size exceeded - limit 500 characters');

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
    const title = new ValidateTitleHandler();
    const description = new ValidateDescriptionHandler();
    const image = new ValidateImageHandler();

    title.setNext(description).setNext(image)

    return title.handle(data);
  }
}

