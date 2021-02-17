// import * as fetch from 'dva/fetch';
// import fetch from "node-fetch";

// export async function http<T>(request: RequestInfo): Promise<T> {
//   const response = await fetch(request);
//   return await response.json();
// }

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response;

  // const error = new Error(response.statusText);
  // error.response = response;
  // throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url: string, options: RequestInit) {
  console.log("to request:" + url);
  const response = await fetch(url, options);

  console.log("fetched");

  checkStatus(response);

  const data = await response.json();
  console.log(data);
  return data;
}
