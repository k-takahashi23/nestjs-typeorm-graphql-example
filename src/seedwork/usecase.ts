export interface Usecase<Request, Response> {
  // TODO: ちゃんと書く
  handle(request: any): Promise<any>;
}