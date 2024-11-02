import {useState, useEffect, useCallback} from 'react';
import networkService from '../services/network';
import {AxiosRequestConfig} from 'axios';

interface UseApiParams<T> {
  url: string;
  method?: 'get' | 'post' | 'put' | 'patch';
  data?: T;
  config?: AxiosRequestConfig;
}

const useApi = <T>({url, method = 'get', config = {}}: UseApiParams<T>) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let apiResponse;
      switch (method) {
        case 'get':
          apiResponse = await networkService.get<T>(url, config);
          break;
        default:
          apiResponse = await networkService.get<T>(url, config);
      }
      setResponse(apiResponse.data);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [url, method]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return {response, loading, error};
};

export default useApi;