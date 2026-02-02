import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Appearance, StyleSheet} from 'react-native';
import {store} from './store/Store';
import {enableScreens} from 'react-native-screens';
import AppNavigator from './navigation/AppNavigator';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

enableScreens();
Appearance.setColorScheme('light');

const App = () => {
  return (
    <GestureHandlerRootView style={styles.main}>
      <SafeAreaProvider>
        <BottomSheetModalProvider>
          <ActionSheetProvider>
            <Provider store={store}>
              <AppNavigator />
            </Provider>
          </ActionSheetProvider>
        </BottomSheetModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({main: {flex: 1}});
