import {
  ColorValue,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState, useMemo, useEffect} from 'react';
import {Slider as RangeSlider} from '@miblanchard/react-native-slider';
import Colors from '../../theme/Colors';
import {wp} from '../../utility/responsive/ScreenResponsive';
import {applyTypography} from '../../theme/Fonts';

interface SliderProps {
  bottomValues?: string[];
  showThumb?: boolean;
  disabled?: boolean;
  value?: number | number[];
  min?: number;
  max?: number;
  step?: number;
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  maximumTrackTintColor?: ColorValue;
  thumbTintColor?: ColorValue;
  minimumTrackTintColor?: ColorValue;
  onValueChange?: (arg: Array<number>) => void;
}

const Slider: React.FC<SliderProps> = props => {
  const {
    bottomValues = [],
    showThumb = true,
    min = 0,
    max = 100,
    step = 1,
    disabled,
    trackStyle,
    thumbStyle,
    style,
    textStyle,
    maximumTrackTintColor = 'rgba(255, 255, 255, 0.24)',
    thumbTintColor = Colors.white,
    minimumTrackTintColor = '#4415B9',
  } = props;
  const [value, setValue] = useState<number | number[]>(props?.value ?? 0);

  const trackViewStyle = useMemo(() => {
    return {...styles.trackStyle, ...trackStyle};
  }, [trackStyle]);

  const thumbViewStyle = useMemo(() => {
    if (showThumb) {
      return {...styles.thumbStyle, ...thumbStyle};
    } else {
      return {width: 0, height: 0};
    }
  }, [thumbStyle, showThumb]);

  const valueTextStyle = useMemo(() => {
    return {...styles.valueText, ...textStyle};
  }, [textStyle]);

  useEffect(() => {
    setValue(props.value ?? 0);
  }, [props.value]);

  const onValueChange = (val: number[]) => {
    setValue(val);
    props.onValueChange?.(val);
  };

  return (
    <View style={styles.container}>
      <RangeSlider
        animateTransitions={true}
        disabled={disabled}
        containerStyle={props.style ?? styles.slider}
        value={value}
        step={step}
        minimumValue={min}
        maximumValue={max}
        thumbTintColor={thumbTintColor?.toString()}
        maximumTrackTintColor={maximumTrackTintColor?.toString()}
        trackStyle={trackViewStyle}
        thumbStyle={thumbViewStyle}
        minimumTrackTintColor={minimumTrackTintColor?.toString()}
        onValueChange={onValueChange}
        renderThumbComponent={() => <View />}
      />
      <View style={styles.bottomContainer}>
        {bottomValues.map((e, index) => {
          return (
            <View key={index} style={styles.horizontalContainer}>
              <View style={styles.item}>
                <View style={styles.line} />
                <Text style={valueTextStyle}>{e}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {},
  slider: {height: 30},
  trackStyle: {
    height: 4,
    borderRadius: 3,
  },
  thumbStyle: {
    height: wp(5),
    width: wp(5),
  },
  horizontalContainer: {
    alignItems: 'center',
    width: 0,
    height: 50,
  },
  valueText: {
    ...applyTypography('Inter-Medium', 14, Colors.accent),
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  line: {
    width: 2,
    height: 15,
    backgroundColor: '#DFE1F3',
    marginTop: 0,
    marginBottom: 5,
  },
  item: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignItems: 'center',
  },
});
