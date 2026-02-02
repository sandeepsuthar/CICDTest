import React, {useMemo} from 'react';
import {DimensionValue, View, ViewStyle} from 'react-native';

interface SpacerProps {
  style?: ViewStyle;
  width?: DimensionValue;
  height?: DimensionValue;
  backgroundColor?: string;
}

const Spacer: React.FC<SpacerProps> = props => {
  const {width, height, backgroundColor} = props;
  const style: ViewStyle = useMemo(() => {
    return {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
    };
  }, [width, height, backgroundColor]);
  return <View style={props.style ?? style} />;
};

export default Spacer;
