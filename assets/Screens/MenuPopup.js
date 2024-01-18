import { View, Text } from 'react-native';
import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import NavigationIcon from './NavigationIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

const MenuPopup = () => {
  return (
    <>
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
    </>
  );
};

export default MenuPopup;
