import axios from "redaxios";
import { RestClientInterface } from ".";

export class RestClient implements RestClientInterface {
  public async get<Response>(path: string) {
    return await axios
      .get<Response>(path, this.restClientConfig)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }

  public async post<Request, Response>(path: string, body: Request) {
    return await axios
      .post<Response>(path, body, this.restClientConfig)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }

  public async patch<Request, Response>(path: string, body: Request) {
    return await axios
      .patch<Response>(path, body, this.restClientConfig)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }

  public async delete(path: string) {
    return await axios
      .delete<void>(path, this.restClientConfig)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }

  private get restClientConfig() {
    return {
      // baseURL: something
      // withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
}

export const getClient = () => {
  return new RestClient();
};
