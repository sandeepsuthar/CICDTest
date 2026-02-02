import {Platform, StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';
import {StackNavigationOptions} from '@react-navigation/stack';
import Colors from './Colors';
import {wp} from '../utility/responsive/ScreenResponsive';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {applyTypography, Fonts} from './Fonts';

export const stackOptions = (): StackNavigationOptions => {
  return {
    headerLeftContainerStyle: styles.leftContainer,
    headerRightContainerStyle: styles.rightContainer,
    // headerShadowVisible: false,
    headerStyle: {},
    // headerTintColor: Colors.primary,
    headerBackButtonDisplayMode: 'minimal',
  };
};

export const tabOptions = (): BottomTabNavigationOptions => {
  return {
    // headerShadowVisible: false,
    headerLeftContainerStyle: styles.leftContainer,
    headerRightContainerStyle: styles.rightContainer,
    tabBarShowLabel: false,
    headerShown: true,
    tabBarStyle: {
      borderTopWidth: 0,
    },
    headerTitleAlign: Platform.OS == 'android' ? 'left' : 'center',
    headerStyle: {},
    // headerTintColor: Colors.primary,
  };
};

const styles = StyleSheet.create({
  tabBarLabel: {
    ...applyTypography(Fonts.interSemiBold, 18, Colors.black),
  },
  leftContainer: {paddingLeft: wp(4)},
  rightContainer: {paddingRight: wp(4)},
});

export const ExtendedTheme = {
  dark: false,
  fonts: DefaultTheme.fonts,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.transparent,
    primary: Colors.primary,
    card: Colors.accent,
    text: Colors.black,
  },
};
