import {Dimensions, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT) / 420;

export const Fonts = {
  interLight: 'Inter-Light',
  interRegular: 'Inter-Regular',
  interMedium: 'Inter-Medium',
  interSemiBold: 'Inter-SemiBold',
  interBold: 'Inter-Bold',
} as const;

export type FontFamily = (typeof Fonts)[keyof typeof Fonts];

export const normalize = (size: number) => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const applyTypography = (
  fontFamily: FontFamily,
  fontSize: number,
  color: string,
) => {
  return {fontFamily: fontFamily, fontSize: normalize(fontSize), color: color};
};
