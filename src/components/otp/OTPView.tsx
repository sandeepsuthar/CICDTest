//import libraries
import React, {useMemo} from 'react';
import {StyleSheet, ViewProps, ViewStyle} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Colors from '../../theme/Colors';
import {wp} from '../../utility/responsive/ScreenResponsive';
import {applyTypography} from '../../theme/Fonts';

interface Props extends ViewProps {
  onSelect?: (arg0: string) => void;
}

// Component
const OTPView = (props: Props) => {
  const {style} = props;

  const mainStyle = useMemo(() => {
    return {...styles.main, ...(style as ViewStyle)};
  }, [style]);

  return (
    <OTPInputView
      style={mainStyle}
      pinCount={4}
      onCodeChanged={props.onSelect}
      autoFocusOnLoad={false}
      codeInputFieldStyle={styles.underlineStyleBase}
      onCodeFilled={props.onSelect}
    />
  );
};

// Styles
const styles = StyleSheet.create({
  main: {
    width: '90%',
    height: 70,
    alignSelf: 'center',
  },
  underlineStyleBase: {
    height: wp(14),
    aspectRatio: 61 / 54,
    backgroundColor: Colors.white,
    ...applyTypography('Inter-Regular', 25, Colors.accent),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DFE1F3',
  },
});

//export component
export default OTPView;
