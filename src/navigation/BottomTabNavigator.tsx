import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './types';
import {SvgProps} from 'react-native-svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Colors from '../theme/Colors';
import {tabOptions} from '../theme/Navigation';
import SVG from '../assets/svg/SVG';
import TabScreen1 from '../screens/tab/TabScreen1';
import TabScreen2 from '../screens/tab/TabScreen2';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabIcon = ({
  focused,
  Icon,
  size,
  style,
}: {
  focused: boolean;
  Icon: React.FC<SvgProps>;
  size?: number;
  style?: {};
}) => {
  return (
    <Icon
      color={focused ? Colors.primary : Colors.accent}
      width={size}
      height={size}
      style={style}
    />
  );
};

const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="TabScreen1"
        component={TabScreen1}
        options={{
          tabBarIcon: props => (
            <TabIcon {...props} Icon={SVG.Delete} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="TabScreen2"
        component={TabScreen2}
        options={{
          tabBarIcon: props => (
            <TabIcon {...props} Icon={SVG.Delete} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
