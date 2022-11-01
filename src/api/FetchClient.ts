import { UrlParams } from "../typings/global";
import { addUrlParams } from "../utils/UrlHelper";

class FetchClient {
    public defaultHeaders = {};

    private async baseFetch<T = void>(method: string, url: string, body?: string): Promise<T> {
        const response = await globalThis.fetch(url,
            {
                method,
                headers: { ...this.defaultHeaders },
                body
            });

        return await response.json() as T;
    }

    private async baseFetchProtected<T = void>(method: string, url: string, token: string, body?: string): Promise<T> {
        const authHeader = { "Authorization": "Bearer " + token };
        const response = await globalThis.fetch(url,
            {
                method,
                headers: { ...this.defaultHeaders, ...authHeader },
                body
            });

        return await response.json() as T;
    }

    public async fetchDelete<T = void>(url: string, token?: string): Promise<T> {
        if (token) {
            return await this.baseFetchProtected("DELETE", url, token);
        } else {
            return await this.baseFetch("DELETE", url, undefined);
        }
    }

    public async fetchGet<T>(url: string, token?: string): Promise<T> {
        if (token) {
            return await this.baseFetchProtected("GET", url, token);
        }
        else {
            return await this.baseFetch("GET", url, undefined);
        }
    }

    public async fetchPut<T>(url: string, body: object): Promise<T> {
        return await this.baseFetch("PUT", url, JSON.stringify(body));
    }

    public async fetchPost<T>(url: string, body: object): Promise<T> {
        return await this.baseFetch("POST", url, JSON.stringify(body));
    }

    public urlBuilder(request: string, params?: UrlParams): URL {
        let base = "https://api.example.com/";

        let url = new URL(request, base);
        if (params) {
            url = addUrlParams(url, params);
        }
        return url;
    }
}

export default FetchClient;