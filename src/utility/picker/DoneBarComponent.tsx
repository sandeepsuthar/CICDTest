import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {wp} from '../responsive/ScreenResponsive';
import Colors from '../../theme/Colors';
import {AppLocalizedStrings} from '../localisation/Localization';
import {applyTypography} from '../../theme/Fonts';

interface DoneBarComponentProps {
  onDonePress: () => void;
}

const DoneBarComponent = (props: DoneBarComponentProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnDone} onPress={props.onDonePress}>
        <Text style={styles.btnDoneText}>{AppLocalizedStrings.done}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoneBarComponent;

const styles = StyleSheet.create({
  container: {backgroundColor: '#F0F1F2'},
  btnDone: {
    width: 'auto',
    alignSelf: 'flex-end',
    paddingHorizontal: wp(5),
  },
  btnDoneText: {
    ...applyTypography('Inter-Bold', 16, Colors.accent),
  },
});
