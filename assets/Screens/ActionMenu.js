import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

const ActionMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuSelect = (value) => {
    // Handle menu option selection here based on the value
    console.log('Selected:', value);

    // For navigation purposes, you can use navigation.navigate with the value
    // For example: navigation.navigate(value);
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      {/* Your navigation button */}
      <TouchableOpacity onPress={toggleMenu} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Show Menu</Text>
      </TouchableOpacity>

      {/* Popup Menu */}
      <MenuProvider customStyles={{ triggerText: { justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 100 } }}>
        <Menu onBackdropPress={() => setMenuVisible(false)}>
          <MenuTrigger />

          {menuVisible && (
            <MenuOptions>
              <MenuOption onSelect={() => handleMenuSelect('Option 1')} text='Option 1' />
              <MenuOption onSelect={() => handleMenuSelect('Option 2')} text='Option 2' />
              {/* Add more menu options as needed */}
            </MenuOptions>
          )}
        </Menu>
      </MenuProvider>
    </View>
  );
};

export default ActionMenu;
