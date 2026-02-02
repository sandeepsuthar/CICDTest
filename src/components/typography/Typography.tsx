import React, {useMemo} from 'react';
import {Text, TextStyle, TextProps} from 'react-native';
import {FontFamily, normalize} from '../../theme/Fonts';

type TypographyStyle = Omit<TextStyle, 'fontFamily'>;

interface TypographyProps extends TextProps {
  style?: TypographyStyle;
  fontFamily?: FontFamily;
}

const Typography: React.FC<TypographyProps> = props => {
  const {style, fontFamily, children, ...rest} = props;

  const family: FontFamily = fontFamily ?? 'Inter-Regular';

  const fontSize: number = style?.fontSize ?? 16;

  const textStyle = useMemo(
    () => ({...style, fontFamily: family, fontSize: normalize(fontSize)}),
    [family, style, fontSize],
  );

  return (
    <Text {...rest} style={textStyle}>
      {children}
    </Text>
  );
};

export default Typography;
