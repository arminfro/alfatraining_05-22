import { useState, useEffect, SetStateAction, Dispatch } from "react";
import axios, { AxiosResponse, Method } from "axios";

import { factoryRawToBook, isBookBase } from "../types/Book";

// config
export const baseUrl = "https://api3.angular-buch.com/secure";

// local utility type
type SetState<T> = Dispatch<SetStateAction<T | undefined>>;

/*
 * Abstracts away both needs for api calls,
 * on rendering and on events / conditions
 *
 * useBookApi, hook
 * bookApi, normal function
 *
 */

/*
 * Useful for http data as a dependency in rendering
 *
 * @param method [Method], http method
 * @param path [string], relative path to baseUrl
 * @return, Response Data
 */
export function useBookApi<T>(path: string): [T | undefined, SetState<T>] {
  const [data, setData] = useState<T>();

  useEffect(() => {
    bookApi("GET", path, setData);
  }, [path]);

  return [data, setData];
}

/*
 * Useful for calls on events or in conditions
 *
 * @param method [Method], http method
 * @param path [string], relative path to baseUrl
 * @param data [function], callback, gets `response.data` as an argument
 * @param data [object], body data
 */
export function bookApi<T>(
  method: Method,
  path: string,
  callback: SetState<T>,
  data = {}
): void {
  axios({
    method: method,
    url: `${baseUrl}/${path}`,
    headers: { Authorization: "Bearer 1234567890" },
    data,
  }).then((response: AxiosResponse<T>) => {
    return callback(response.data);
  });
}

/*
 * Axios Interceptor
 * Factory BookWithDateString to Book
 */
axios.interceptors.response.use((response: AxiosResponse) => {
  if (response.data) {
    if (Array.isArray(response.data) && response.data.every(isBookBase)) {
      response.data = response.data.map(factoryRawToBook);
    } else if (isBookBase(response.data)) {
      response.data = factoryRawToBook(response.data);
    }
  }
  return response;
});
