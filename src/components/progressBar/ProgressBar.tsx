import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {memo, useMemo} from 'react';
import {hp, wp} from '../../utility/responsive/ScreenResponsive';
import Colors from '../../theme/Colors';
import StepIndicator from 'react-native-step-indicator';
import {applyTypography} from '../../theme/Fonts';

const customStyles = {
  // stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeWidth: 0.5,
  stepStrokeFinishedColor: '#67c432',
  stepStrokeUnFinishedColor: Colors.primary,
  separatorFinishedColor: Colors.primary,
  stepStrokeCurrentColor: Colors.primary,
  stepIndicatorFinishedColor: '#67c432',
  stepIndicatorUnFinishedColor: Colors.white,
  separatorUnFinishedColor: Colors.black,
};

interface ProgressBarProps {
  items: {title: string}[];
  completedSteps?: number;
  style?: ViewStyle;
}
const ProgressBar = (props: ProgressBarProps) => {
  const {style, completedSteps = 0, items} = props;
  const mainStyle: ViewStyle[] = useMemo(
    () => [styles.main, style ?? {}],
    [style],
  );
  const labels = useMemo(() => items.map(item => item.title), [items]);
  const renderLabel = ({
    position,
    label,
  }: {
    position: number;
    stepStatus: string;
    label: string;
    currentPosition: number;
  }) => {
    const isActive = position <= completedSteps;
    const color = isActive == true ? Colors.primary : Colors.black;
    return (
      <View style={styles.infoContainer}>
        <Text style={[styles.lblStatus, {color}]}>{label}</Text>
      </View>
    );
  };

  return (
    <View style={mainStyle}>
      <StepIndicator
        stepCount={items.length}
        customStyles={customStyles}
        currentPosition={completedSteps}
        labels={labels}
        // renderStepIndicator={() => <SVG.Check height={12} />}
        renderLabel={renderLabel}
      />
    </View>
  );
};

export default memo(ProgressBar);

const styles = StyleSheet.create({
  main: {
    width: '100%',
    // backgroundColor: 'red',
  },
  infoContainer: {
    marginTop: hp(0.2),
    paddingHorizontal: wp(0.3),
    alignItems: 'center',
  },
  lblDate: {
    ...applyTypography('Inter-Bold', 12, Colors.accent),
  },
  lblStatus: {
    ...applyTypography('Inter-Bold', 12, Colors.primary),
    textAlign: 'center',
  },
});
