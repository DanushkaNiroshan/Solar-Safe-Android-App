import { View, Text } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const MenuBar = () => {
  return (
    <View style={{ backgroundColor: '#01796F', flex: 1, flexDirection: 'row' }}>
      <View style={{ backgroundColor: '#01796F', width: responsiveWidth(100), flex: 0.4 }}></View>
      <View
        style={{
          backgroundColor: '#4da19a',
          justifyContent: 'center',
          justifyContent: 'space-between',
          marginTop: responsiveHeight(30),
          width: responsiveWidth(100),
          flex: 0.7,
          borderRadius: 20,
          height: responsiveHeight(60),
          paddingTop: responsiveHeight(3),
          paddingBottom: responsiveHeight(3)
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: responsiveHeight(5),
            paddingLeft: responsiveWidth(3),
            marginLeft: responsiveWidth(2),
            justifyContent: 'center',
            marginRight: responsiveWidth(2)
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>History</Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: responsiveHeight(5),
            paddingLeft: responsiveWidth(3),
            marginLeft: responsiveWidth(2),
            justifyContent: 'center',
            marginRight: responsiveWidth(2)
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Maintenance</Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: responsiveHeight(5),
            paddingLeft: responsiveWidth(3),
            marginLeft: responsiveWidth(2),
            justifyContent: 'center',
            marginRight: responsiveWidth(2)
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Measurements</Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: responsiveHeight(5),
            paddingLeft: responsiveWidth(3),
            marginLeft: responsiveWidth(2),
            justifyContent: 'center',
            marginRight: responsiveWidth(2)
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Battery</Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: responsiveHeight(5),
            paddingLeft: responsiveWidth(3),
            marginLeft: responsiveWidth(2),
            justifyContent: 'center',
            marginRight: responsiveWidth(2)
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Setting</Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            height: responsiveHeight(5),
            paddingLeft: responsiveWidth(3),
            marginLeft: responsiveWidth(2),
            justifyContent: 'center',
            marginRight: responsiveWidth(2)
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>About</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuBar;
