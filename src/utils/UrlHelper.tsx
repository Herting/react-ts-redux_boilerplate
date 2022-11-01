import { UrlParams } from "../typings/global";

/**
 * The url can be relative or absolute
 * @param url Url to convert to absolute
 */
export const absoluteURL = (url: string | URL | undefined): string =>
{
    if(!url){
        return "";
    }

    if (url instanceof URL)
    {
        return url.toString();
    }

    if (url.startsWith("http"))
    {
        return new URL(url).toString();
    }

    if (url.startsWith("~/"))
    {
        url = url.substring(1);
    }

    return new URL(url, origin).toString();
};

export const relativeURL = (url: string | URL | undefined): string =>
{
    if(!url)
    {
        return "/";
    }

    if(url instanceof URL)
    {
        return url.pathname + url.search + url.hash;
    }

    if(url.startsWith("/"))
    {
        return url;
    }
    if(url.startsWith("http"))
    {
        return relativeURL(new URL(url));
    }

    return url;
};

export const addUrlParams = (url: URL, params: UrlParams): URL =>
{
    const newURl = new URL(url.toString());
    for (const key in params)
    {
        newURl.searchParams.append(key, params[key].toString());
    }
    return newURl;
};

export const stripUrlParams = (url: URL | string) =>
{
    const newURL = url instanceof URL ? url : new URL(url);
    newURL.search = "";
    return url instanceof URL ? newURL : newURL.toString();
};