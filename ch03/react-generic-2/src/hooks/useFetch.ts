import { useState } from "react";
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

axios.defaults.baseURL = "/api";

const useFetch = <T>(url: string, params: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse<T>>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchData = async () => {
    setResponse(undefined);
    try {
      setIsLoading(true);
      const result: AxiosResponse<T> = await axios.get<T>(url, params);
      setResponse(result);
    } catch (err) {
      setError(err as unknown as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  const requestData = () => {
    fetchData();
  };

  return { response, error, isLoading, requestData };
};

export { useFetch };
