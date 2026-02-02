//import libraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Typography from '../../components/typography/Typography';
import {normalize} from '../../theme/Fonts';
import Colors from '../../theme/Colors';

// Screen
const TabScreen1 = () => {
  return (
    <View style={styles.main}>
      <Typography fontFamily="Inter-SemiBold" style={styles.tabTitle}>
        Home Screen
      </Typography>
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
  tabTitle: {
    fontSize: 18,
    color: Colors.black,
  },
});

//export screen
export default TabScreen1;
