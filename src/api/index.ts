import FetchClient from "./FetchClient";
import ExampleApiClient from "./ExampleApiClient";

export function createExampleApiClient() {
  return new ExampleApiClient(new FetchClient());
}

const api = {
  ExampleClient: createExampleApiClient()
};

export default api;