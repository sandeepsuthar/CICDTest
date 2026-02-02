import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ExtendedTheme} from '../theme/Navigation';
import RootNavigation from './RootNavigation';
import {StatusBar} from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import {RootStackParamList} from './types';
import AuthStackNavigator from './AuthStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer theme={ExtendedTheme} ref={RootNavigation.navigation}>
      <StatusBar barStyle="light-content" backgroundColor={'#04001A'} />
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
        <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
