//import libraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Screen
const SignUpScreen = () => {
  return (
    <View style={styles.main}>
      <Text>SignUpScreen</Text>
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
export default SignUpScreen;
