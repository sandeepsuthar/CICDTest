import Snackbar from 'react-native-snackbar';
import Colors from '../../theme/Colors';
import {Platform} from 'react-native';

class Toast {
  constructor() {}
  public static showToast = (
    message?: string,
    type: 'Success' | 'Failure' | 'Warning' | 'Alert' = 'Alert',
  ) => {
    if (message != null && message.length > 0) {
      setTimeout(() => {
        Snackbar.show({
          text: message,
          backgroundColor: Toast.getColor(type),
          textColor: Colors.white,
          duration: 3000,
        });
      }, Platform.select({ios: 0, android: 300}));
    }
  };

  private static getColor = (
    type: 'Success' | 'Failure' | 'Warning' | 'Alert' = 'Alert',
  ) => {
    switch (type) {
      case 'Success':
        return '#009900';
      case 'Failure':
        return '#FF4140';
      case 'Warning':
        return '#FCB320';
      default:
        return Colors.primary;
    }
  };
}

export default Toast;
