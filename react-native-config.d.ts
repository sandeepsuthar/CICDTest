declare module 'react-native-config' {
  export interface NativeConfig {
    APP_NAME: string;
    BASE_URL: string;
    WEB_CLIENT_ID_ANDROID: string;
    WEB_CLIENT_ID_IOS: string;
    REDIRECT_URL: string;
    SERVICE_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
