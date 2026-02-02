/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import InternetManager from './src/network/InternetManager';
import KeyboardManager from './src/utility/keyboard/KeyboardManager';
import SocialLogin from './src/utility/firebase/SocialLogin';
import * as RemoteNotification from './src/utility/firebase/RemoteNotification';

LogBox.ignoreLogs(['Warning: ...', 'WARN']);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => {
  initialAppSetup();
  return App;
});

const initialAppSetup = () => {
  KeyboardManager.setupKeyboard();
  InternetManager.shared.setup();
  SocialLogin.configure();
  RemoteNotification.configure();
};
