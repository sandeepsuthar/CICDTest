import {Platform, ScrollView, ScrollViewProps, StyleSheet} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props extends ScrollViewProps {}

const KeyboardAvoidingView = (props: React.PropsWithChildren<Props>) => {
  const {} = props;
  if (Platform.OS == 'ios') {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        alwaysBounceVertical={false}
        {...props}>
        {props.children}
      </ScrollView>
    );
  }
  return (
    <KeyboardAwareScrollView
      scrollEnabled={true}
      enableAutomaticScroll={true}
      extraScrollHeight={20}
      extraHeight={20}
      showsVerticalScrollIndicator={false}
      {...props}>
      {props.children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidingView;

const styles = StyleSheet.create({});
