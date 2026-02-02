import React, {useMemo} from 'react';
import {View, ViewStyle} from 'react-native';

interface RowProps {
  style?: ViewStyle;
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = props => {
  const style: ViewStyle = useMemo(() => {
    return {
      flexDirection: 'row',
      ...props.style,
    };
  }, [props.style]);

  return <View style={style}>{props.children}</View>;
};

export default Row;
