import {Platform} from 'react-native';
import KM from 'react-native-keyboard-manager';
import Colors from '../../theme/Colors';
import {AppLocalizedStrings} from '../localisation/Localization';

export default class KeyboardManager {
  static setupKeyboard = () => {
    if (Platform.OS === 'ios') {
      KM.setEnable(true);
      KM.setEnableDebugging(false);
      KM.setKeyboardDistanceFromTextField(10);
      KM.setLayoutIfNeededOnUpdate(true);
      KM.setEnableAutoToolbar(true);
      KM.setToolbarDoneBarButtonItemText(AppLocalizedStrings.done);
      KM.setToolbarManageBehaviourBy('subviews'); // "subviews" | "tag" | "position"
      KM.setToolbarPreviousNextButtonEnable(false);
      KM.setToolbarTintColor(Colors.primary); // Only #000000 format is supported
      KM.setToolbarBarTintColor(Colors.white); // Only #000000 format is supported
      KM.setShouldShowToolbarPlaceholder(true);
      KM.setOverrideKeyboardAppearance(false);
      KM.setKeyboardAppearance('default'); // "default" | "light" | "dark"
      KM.setShouldResignOnTouchOutside(true);
      KM.setShouldPlayInputClicks(true);
      KM.resignFirstResponder();
    }
  };
}
