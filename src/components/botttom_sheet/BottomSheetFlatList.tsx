//import libraries
import React, {forwardRef} from 'react';
import {StyleSheet, ListRenderItem} from 'react-native';
import {BottomSheetFlatList as BSF} from '@gorhom/bottom-sheet';
import BottomSheetContainer, {
  BottomSheetContainerRef,
} from '../botttom_sheet/BottomSheetContainer';

interface Props<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactElement;
  title: string;
  onDismiss?: () => void;
  itemSeparatorComponent?: () => React.ReactElement;
  snapPoints?: Array<string | number>;
  snapIndex?: number;
}

const BottomSheetFlatList = <T,>(
  props: Props<T>,
  ref: React.ForwardedRef<BottomSheetContainerRef>,
) => {
  const {
    title,
    items,
    snapIndex,
    snapPoints,
    onDismiss,
    itemSeparatorComponent,
  } = props;

  const renderItem: ListRenderItem<T> = ({index, item}) =>
    props.renderItem(item, index);

  const keyExtractor = (item: T, index: number) => `${index}`;

  return (
    <BottomSheetContainer
      ref={ref}
      snapPoints={snapPoints}
      index={snapIndex}
      title={title}
      onDismiss={onDismiss}>
      <BSF
        contentContainerStyle={styles.contentContainerStyle}
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={itemSeparatorComponent}
      />
    </BottomSheetContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 0,
    paddingBottom: 16,
  },
});

//export component
export default forwardRef(BottomSheetFlatList) as <T>(
  props: Props<T> & {ref?: React.ForwardedRef<BottomSheetContainerRef>},
) => ReturnType<typeof BottomSheetFlatList>;
