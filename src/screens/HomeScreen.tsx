//import libraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';
import SocialLogin from '../utility/firebase/SocialLogin';

// Screen
const HomeScreen = () => {
  const handleLogin = async () => {
    try {
      const result = await SocialLogin.appleLogin();
      console.log(`Email: ${result?.email}`);
      console.log(`DisplayName: ${result?.displayName}`);
      console.log(`UID: ${result?.uid}`);
    } catch (error) {}
  };
  return (
    <View style={styles.main}>
      <Text>{Config.APP_NAME}</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
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
export default HomeScreen;
