import React, {useMemo} from 'react';
import {BottomSheetBackdropProps} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';

const screen_height = Dimensions.get('screen').height;

const CustomBackdrop = ({
  animatedIndex,
  style,
  animatedPosition,
}: BottomSheetBackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedPosition.value,
      [screen_height, 0],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#323A5299',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return <Animated.View style={containerStyle} />;
};

export default CustomBackdrop;
