//import libraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Screen
const TabScreen2 = () => {
  return (
    <View style={styles.main}>
      <Text>TabScreen2</Text>
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
export default TabScreen2;
