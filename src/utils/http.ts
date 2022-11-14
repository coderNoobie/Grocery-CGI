import { RespBodyStructure } from "./utils";

const buildUrl = (url: string, params: any = {}): string => {
    const query = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
    let _url = url;
    if (query.length) _url = url + '?' + query;
    return _url;
};

const get = (
    url: string,
    options: { query?: any; headers?: any } = { query: {}, headers: {} }
  ): Promise<any> => {
    const config = { url, options };
    console.log(options)
  
    const _url = buildUrl(config.url, config?.options?.query || {});
    console.log("url is ", _url)
    const _headers = config?.options?.headers || {};
    return fetch(_url, {
      method: 'GET',
      headers: _headers
    })
      .then((response) => {
        if (response?.status >= 500 && !response?.ok) {
          throw new Error('Server Error');
        }
        return response.json();
      })
      .then((respbody: RespBodyStructure) => {
        if (respbody?.statusCode == 0) {
          return Promise.resolve(respbody?.data);
        }
        return Promise.reject(respbody || new Error('Server Error'));
      })
      .catch((error: any) => {
        console.log("herdasdaser")
        return Promise.reject(error);
      });
};

export {get}