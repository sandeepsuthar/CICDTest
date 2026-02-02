import RNSInfo from 'react-native-sensitive-info';

type SharedPreferenceKeys = 'user' | 'apple_login';

const options: RNSInfo.RNSensitiveInfoOptions = {
  sharedPreferencesName: 'sharedPrefs',
  keychainService: 'keychain',
};

class SharedPreference {
  static isStringValidJSON = (str: string): boolean => {
    try {
      const parsedData = JSON.parse(str);
      return typeof parsedData === 'object' && parsedData !== null;
    } catch (error) {
      return false;
    }
  };

  static getItem = async <T,>(
    key: SharedPreferenceKeys,
  ): Promise<T | undefined> => {
    const item = await RNSInfo.getItem(key, options);
    return SharedPreference.isStringValidJSON(item)
      ? (JSON.parse(item) as T)
      : (item as T);
  };

  static setItem = async (key: SharedPreferenceKeys, value: string) => {
    return await RNSInfo.setItem(key, value, options);
  };

  static removeItem = async (key: SharedPreferenceKeys) => {
    await RNSInfo.deleteItem(key, options);
  };
}

export default SharedPreference;
