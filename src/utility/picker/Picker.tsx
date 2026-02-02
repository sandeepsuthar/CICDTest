import {
  ColorValue,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Picker as WoodPicker,
  PickerInstance,
  PickerItem,
} from 'react-native-woodpicker';
import Colors from '../../theme/Colors';
import DoneBarComponent from './DoneBarComponent';
import {AppLocalizedStrings} from '../localisation/Localization';
import SVG from '../../assets/svg/SVG';

export interface PickerInstaceRef {
  show: () => void;
  hide: () => void;
}

export interface DropDownItem {
  value?: any;
  label?: string;
  color?: string;
  fontFamily?: string;
  flag?: string;
  id?: string;
  reason?: string;
}

interface PickerProps {
  color?: ColorValue;
  item?: DropDownItem | undefined;
  items: DropDownItem[];
  showArrow?: boolean;
  textStyle?: TextStyle;
  style?: ViewStyle;
  pickerContainerStyle?: ViewStyle;
  placeholder?: string;
  mode?: 'dropdown' | 'dialog';
  itemColor?: string;
  iconSize?: number;
  doneButtonLabel?: string;
  onItemChange?: (arg0: DropDownItem, index: number) => void;
}

const Picker = React.forwardRef<
  PickerInstaceRef,
  React.PropsWithChildren<PickerProps>
>((props, ref) => {
  const {
    iconSize = 15,
    showArrow = true,
    mode = 'dialog',
    itemColor = Colors.accent,
    placeholder,
    doneButtonLabel = AppLocalizedStrings.done,
    textStyle,
    items,
    color = Colors.accent,
  } = props;

  const pickerRef = useRef<PickerInstance | null>();

  const [pickedData, setPickedData] = useState<PickerItem | undefined>(
    props.item as PickerItem,
  );

  useEffect(() => {
    setPickedData(props.item as PickerItem);
  }, [props.item]);

  const onItemChange = (item: PickerItem, index: number) => {
    setPickedData(item);
    props.onItemChange?.(item as unknown as DropDownItem, index);
  };

  const styleContainer = useMemo(
    () => [styles.container, props.style],
    [props.style],
  );

  const pickerContainer = useMemo(() => {
    return {...styles.pickerContainer, ...props.pickerContainerStyle};
  }, [props.pickerContainerStyle]);

  const onDonePress = () => {
    pickerRef.current?.close();
  };

  useImperativeHandle(ref, () => ({
    show: () => {
      pickerRef.current?.open();
    },
    hide: () => {
      pickerRef.current?.close();
    },
  }));

  return (
    <View style={styleContainer}>
      <WoodPicker
        ref={ref => (pickerRef.current = ref)}
        mode={mode}
        containerStyle={pickerContainer}
        doneButtonLabel={doneButtonLabel}
        textInputStyle={textStyle}
        item={pickedData}
        items={items as PickerItem[]}
        onItemChange={onItemChange}
        placeholder={placeholder}
        isNullable={false}
        itemColor={itemColor}
        // itemFontFamily={'Bold'}
        DoneBarComponent={() => <DoneBarComponent onDonePress={onDonePress} />}
        // backdropAnimation={{opacity: 0, duration: 0, delay: 0}}
      />
      {showArrow == true && (
        <TouchableOpacity
          style={styles.downArrow}
          onPress={() => pickerRef.current?.open()}>
          <SVG.Arrow
            fill={color}
            height={(15 / 8.41) * iconSize}
            width={iconSize}
          />
        </TouchableOpacity>
      )}
    </View>
  );
});

export default Picker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerContainer: {
    flex: 1,
    paddingEnd: 22,
  },
  downArrow: {
    position: 'absolute',
    right: 5,
    zIndex: 10,
  },
});
