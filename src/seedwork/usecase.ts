export interface Usecase<Request, Response> {
  handle(request: Request): Promise<Response>;
}
