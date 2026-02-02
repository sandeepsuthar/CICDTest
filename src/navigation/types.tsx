import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/core';
import {StackScreenProps} from '@react-navigation/stack';
import {BottomTabScreenProps as BTSP} from '@react-navigation/bottom-tabs';

// RootStack
export type RootStackParamList = {
  SplashScreen: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

// AuthStack
export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, T>,
    StackScreenProps<RootStackParamList, 'AuthStack'>
  >;

// HomeStack
export type HomeStackParamList = {
  BottomTabStack: NavigatorScreenParams<BottomTabParamList>;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, T>,
    StackScreenProps<RootStackParamList, 'HomeStack'>
  >;

// BottomStack
export type BottomTabParamList = {
  TabScreen1: undefined;
  TabScreen2: undefined;
};

export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BTSP<BottomTabParamList, T>,
    CompositeScreenProps<
      StackScreenProps<HomeStackParamList, 'BottomTabStack'>,
      StackScreenProps<RootStackParamList, 'HomeStack'>
    >
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
