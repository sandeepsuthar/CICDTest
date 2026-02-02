import {BottomSheetModal, BottomSheetModalProps} from '@gorhom/bottom-sheet';
import React, {useRef, useImperativeHandle} from 'react';
import BottomSheetHeader from './BottomSheetHeader';
import CustomBackdrop from './CustomBackdrop';
import {hp} from '../../utility/responsive/ScreenResponsive';

interface Props extends BottomSheetModalProps {
  title?: string;
  onDismiss?: () => void;
}

export interface BottomSheetContainerRef {
  show: () => void;
  hide: () => void;
}

const BottomSheetContainer = React.forwardRef<
  BottomSheetContainerRef,
  React.PropsWithChildren<Props>
>((props, ref) => {
  const {children, title, onDismiss} = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    show: () => {
      toggleSheet(true);
    },
    hide: () => {
      toggleSheet(false);
    },
  }));

  const toggleSheet = (show: boolean) => {
    if (show) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  };

  return (
    <BottomSheetModal
      onDismiss={onDismiss}
      handleComponent={() => (
        <BottomSheetHeader title={title} onPress={() => toggleSheet(false)} />
      )}
      ref={bottomSheetModalRef}
      backdropComponent={props => <CustomBackdrop {...props} />}
      {...props}
      maxDynamicContentSize={hp(90)}>
      {children}
    </BottomSheetModal>
  );
});

export default BottomSheetContainer;
