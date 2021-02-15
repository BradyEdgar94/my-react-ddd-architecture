export interface RestClientInterface {
  get: <Response>(path: string) => Promise<Response>;
  post: <Request, Response>(path: string, body: Request) => Promise<Response>;
  patch: <Request, Response>(path: string, body: Request) => Promise<Response>;
  delete: (path: string) => Promise<void>;
}
