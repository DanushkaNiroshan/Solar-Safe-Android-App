import { View, Text, TouchableOpacity, Button, Pressable } from 'react-native';
import { useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import { MenuProvider, renderers } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const NavigationIcon = (p) => {
  const stack = p.stack;

  function GotoHealth() {
    stack.navigate('Health');
  }

  function GotoHome() {
    stack.navigate('Home');
  }

  function GotoChartPage() {
    stack.navigate('ChartPage');
  }

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const MenuPopup = () => {
    if (isMenuVisible) {
      return (
        <MenuProvider
          style={{
            backgroundColor: 'blue',
            position: 'absolute',
            justifyContent: 'center',
            height: responsiveHeight(20),
            flex: 0.5
          }}
        >
          <Menu>
            <View>
              <MenuOptions>
                <MenuOption text='History' />
                <MenuOption text='Maintenance' />
                <MenuOption text='Measurements' />
                <MenuOption text='Battery' />
                <MenuOption text='Settings' />
                <MenuOption text='About' />
              </MenuOptions>
            </View>
          </Menu>
        </MenuProvider>
      );
    }
    return null;
  };
  const handleMenuPress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: '#4da19a',
          position: 'absolute',
          width: responsiveWidth(100),
          height: responsiveHeight(8),
          marginTop: responsiveHeight(98),
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: responsiveWidth(2)
        }}
      >
        <View
          style={{
            backgroundColor: '#01796F',
            marginLeft: responsiveWidth(2),
            borderRadius: 100,
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MaterialIcons
            onPress={GotoHealth}
            name='battery-full'
            size={responsiveWidth(10)}
            color='white'
            style={{ transform: [{ rotate: '90deg' }] }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#01796F',
            borderRadius: 100,
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MaterialIcons name='circle' size={responsiveWidth(10)} color='white' />
        </View>

        <View
          style={{
            backgroundColor: '#01796F',
            borderRadius: 100,
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MaterialIcons onPress={GotoHome} name='home' size={responsiveWidth(10)} color='white' />
        </View>

        <View
          style={{
            backgroundColor: '#01796F',
            borderRadius: 100,
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <MaterialIcons onPress={GotoChartPage} name='settings' size={responsiveWidth(10)} color='white' />
        </View>

        <View
          style={{
            backgroundColor: '#01796F',
            marginRight: responsiveWidth(2),
            borderRadius: 100,
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity onPress={handleMenuPress}>
            <MaterialIcons name='menu' size={responsiveWidth(10)} color='white' />
          </TouchableOpacity>
        </View>
      </View>
      {MenuPopup()}
    </View>
  );
};

export default NavigationIcon;
