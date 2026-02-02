import Config from 'react-native-config';
import APIRequest from './APIRequest';
import APIResponse from './APIResponse';

const defaultHeaders: Record<string, any> = {
  'Content-Type': 'application/json',
};

class APIManager {
  private constructor() {}

  private static _instance: APIManager = new APIManager();

  static get shared(): APIManager {
    return APIManager._instance;
  }

  private static isFormData = (data: object | undefined): data is FormData => {
    return (data as FormData)?.append !== undefined;
  };

  private static getFetchBody = (request: APIRequest) => {
    if (request.body == null) {
      return undefined;
    }
    return APIManager.isFormData(request.body)
      ? request.body
      : request.method === 'POST'
      ? JSON.stringify(request.body)
      : undefined;
  };

  static makeRequest = async <T,>(
    request: APIRequest,
    useDebug: boolean = true,
  ): Promise<APIResponse<T>> => {
    // Extract Data
    const method = request.method ?? 'GET';
    const body = APIManager.getFetchBody(request);

    const url = Config.BASE_URL + request.url;
    const headers = {...defaultHeaders, ...request.headers};
    try {
      //   const accessToken = store.getState().app.user?.token;
      //   if (accessToken != null) {
      //     headers['authorization'] = 'Bearer ' + accessToken;
      //   }
      // Fetch API Data
      const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body,
        signal: request.abort?.signal,
      });
      // Debug Handle
      const responseJson = (await response.json()) as APIResponse<T>;
      if (!response.ok || !responseJson.success) {
        throw new Error(responseJson.message);
      }
      if (useDebug) {
        this.printRequest({url, method, headers, body}, response, responseJson);
      }
      return responseJson;
    } catch (error) {
      console.log(error);
      if (useDebug) {
        this.printRequest({url, method, headers, body});
      }
      throw error;
      // let isCancelled = error.message === 'Aborted';
      // if (!isCancelled) {
      //   throw error;
      // }
    }
  };

  static async printRequest(
    request: APIRequest,
    response?: Response,
    responseData?: any,
  ) {
    console.log('*****************************************************');
    console.log('URL: ', request.url);
    console.log('Method: ', request.method);
    console.log('Headers: ', request.headers);
    console.log('Body: ', request.body);
    if (response != null) {
      console.log('Status Code: ', response?.status);
      console.log('Response Json: ', JSON.stringify(responseData));
    }
    console.log('*****************************************************');
  }
}

export default APIManager;
