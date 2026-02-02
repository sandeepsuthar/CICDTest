import React, {forwardRef} from 'react';
import {StyleSheet} from 'react-native';
import {BottomSheetSectionList as BSSL} from '@gorhom/bottom-sheet';
import BottomSheetContainer, {
  BottomSheetContainerRef,
} from '../botttom_sheet/BottomSheetContainer';
import {BottomSheetSectionListProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';

interface Props<T, S> extends BottomSheetSectionListProps<T, S> {
  title: string;
  onDismiss?: () => void;
  snapPoints?: Array<string | number>;
  snapIndex?: number;
  children?: React.ReactElement;
}

const BottomSheetSectionList = <T, S>(
  props: Props<T, S> & {ref?: React.ForwardedRef<BottomSheetContainerRef>},
  ref: React.ForwardedRef<BottomSheetContainerRef>,
) => {
  const {title, snapIndex, snapPoints, onDismiss, ...rest} = props;

  return (
    <BottomSheetContainer
      ref={ref}
      snapPoints={snapPoints}
      index={snapIndex}
      title={title}
      onDismiss={onDismiss}>
      <BSSL {...rest} />
      {props.children}
    </BottomSheetContainer>
  );
};

const styles = StyleSheet.create({});

export default forwardRef(BottomSheetSectionList) as <T, S>(
  props: Props<T, S> & {ref?: React.ForwardedRef<BottomSheetContainerRef>},
) => ReturnType<typeof BottomSheetSectionList>;
