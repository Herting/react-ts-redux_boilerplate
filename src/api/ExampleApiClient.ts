import FetchClient from "./FetchClient";

const defaultHeaders = {
    "Accept": "application/json",
    "X-Request-Domain": globalThis.origin,
    "Origin": globalThis.origin,
    "Content-Type": "application/json"
};

export default class ExampleApiCLient {
    baseClient: FetchClient;

    constructor(api: FetchClient) {
        this.baseClient = api;
        this.baseClient.defaultHeaders = defaultHeaders;
    }

    // async login(login: LoginModel): Promise<AuthenticateResponse> {
    //     const url = this.baseClient.urlBuilder("authenticate").toString();
    //     return await this.baseClient.fetchPost<AuthenticateResponse>(url, login);
    // };
}