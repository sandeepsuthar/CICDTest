export default interface APIResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export type EmptyResponse = Record<string, string>;
