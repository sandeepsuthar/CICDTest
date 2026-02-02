//import libraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {RootStackScreenProps} from '../navigation/types';
import {CommonActions} from '@react-navigation/routers';

// Screen
const SplashScreen = (props: RootStackScreenProps<'SplashScreen'>) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'HomeStack'}],
        }),
      );
      //   props.navigation.replace('HomeStack', {
      //     screen: 'BottomTabStack',
      //     params: {
      //       screen: 'TabScreen1',
      //     },
      //   });
    }, 1000);
  }, []);

  return (
    <View style={styles.main}>
      <ActivityIndicator animating={loading} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//export screen
export default SplashScreen;
