import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage, {
  ImageStyle,
  ResizeMode,
  Priority,
  Source,
} from '@d11/react-native-fast-image';
interface ImageViewProps {
  source: Source | string;
  style?: ImageStyle;
  resizeMode?: ResizeMode;
  priority?: Priority;
  showPlaceholder?: boolean;
}

const ImageView: React.FC<ImageViewProps> = props => {
  const {showPlaceholder = true, source, style, resizeMode, priority} = props;
  return (
    <FastImage
      defaultSource={
        showPlaceholder
          ? require('../../assets/images/placeholder.jpeg')
          : undefined
      }
      style={style}
      source={
        typeof source == 'string'
          ? {
              uri: source,
              priority: priority ?? FastImage.priority.high,
            }
          : source
      }
      resizeMode={resizeMode ?? FastImage.resizeMode.cover}
    />
  );
};

export default ImageView;

const styles = StyleSheet.create({});
