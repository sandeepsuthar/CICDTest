//import libraries
import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  ViewStyle,
  Dimensions,
} from 'react-native';
import Colors from '../../theme/Colors';
import Expand from '../layout/Expand';
// import IconButton from '../button/IconButton';
import SVG from '../../assets/svg/SVG';
import {hp, wp} from '../../utility/responsive/ScreenResponsive';

interface Props extends ViewProps {
  title?: string;
  onPress: () => void;
}

// Component
const BottomSheetHeader = (props: Props) => {
  const {style, title, onPress} = props;

  const mainStyle = useMemo(() => {
    return {...styles.main, ...(style as ViewStyle)};
  }, [style]);

  return (
    <View style={mainStyle}>
      <Expand />
      <Text style={styles.title}>{title}</Text>
      <Expand>
        {/* <IconButton
          Icon={SVG.Close}
          style={styles.icon}
          color={Colors.secondary}
          size={20}
          onPress={onPress}
        /> */}
      </Expand>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
    marginBottom: hp(2),
  },
  icon: {
    alignSelf: 'flex-end',
    width: 36,
    aspectRatio: 1,
    padding: 6,
  },
  title: {
    // ...Font.apply({style: Font.Styles.H3, color: Colors.secondary}),
    // marginHorizontal: wp(15),
    // textAlign: 'center',
  },
});

//export component
export default BottomSheetHeader;
