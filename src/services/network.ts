import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

const BASE_URL = '';
const TIMEOUT = 15000;

interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
}

interface ErrorResponse {
  status: number;
  message: string;
  data?: any;
}

class NetworkService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      async config => {
        if (process.env.NODE_ENV === 'development') {
          this.logRequest(config);
        }
        return config;
      },
      error => {
        return Promise.reject(this.createErrorResponse(error));
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (process.env.NODE_ENV === 'development') {
          this.logResponse(response);
        }

        return response;
      },
      async (error: AxiosError) => {
        return this.handleErrorResponse(error);
      },
    );
  }

  private logRequest(config: AxiosRequestConfig): void {
    console.log('🚀 Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      data: config.data,
      headers: config.headers,
    });
  }

  private logResponse(response: AxiosResponse): void {
    console.log('✅ Response:', {
      status: response.status,
      data: response.data,
    });
  }

  private createErrorResponse(error: any): ErrorResponse {
    return {
      status: error.response?.status || 0,
      message: error.response?.data?.message || error.message || 'xxx',
      data: error.response?.data || null,
    };
  }

  private async handleErrorResponse(error: AxiosError): Promise<ErrorResponse> {
    let errorResponse: ErrorResponse;
    switch (error.response?.status) {
      case 401:
        errorResponse = {
          status: 401,
          message: 'xxxx',
        };
        break;
      case 404:
        errorResponse = {
          status: 404,
          message: 'xxx',
        };
        break;
      case 500:
        errorResponse = {
          status: 500,
          message: 'xxx',
        };
        break;
      default:
        errorResponse = this.createErrorResponse(error);
    }

    return Promise.reject(errorResponse);
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await this.axiosInstance.get(url, config);
      return {
        status: response.status,
        data: response.data,
        message: 'xxxx',
      };
    } catch (error) {
      throw this.createErrorResponse(error);
    }
  }
}

const networkService = new NetworkService();

export default networkService;
