//import libraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Screen
const LoginScreen = () => {
  return (
    <View style={styles.main}>
      <Text>LoginScreen</Text>
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
export default LoginScreen;
