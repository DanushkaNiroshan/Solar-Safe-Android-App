import { View, Text, Image, TouchableOpacity, Button, Animated, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import NavigationIcon from './NavigationIcon';
import { MaterialIcons } from '@expo/vector-icons';

const StartPage = (p) => {
  function gotoHome() {
    p.navigation.navigate('Home');
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size={'large'} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#01796F',
            height: responsiveHeight(100),
            width: responsiveWidth(100)
          }}
        >
          <View style={{ flexDirection: 'row', marginTop: responsiveHeight(15) }}>
            <Text style={{ fontSize: responsiveFontSize(5), color: 'white', fontWeight: 'bold' }}>SOLAR</Text>
            <Text style={{ fontSize: responsiveFontSize(5), color: '#043927', fontWeight: 'bold' }}>SAFE</Text>
          </View>
          <View style={{ paddingTop: responsiveHeight(5) }}>
            <Image source={require('../../assets/3.png')} style={{ width: responsiveWidth(60), height: responsiveHeight(35) }} />
          </View>
          <TouchableOpacity
            onPress={gotoHome}
            style={{
              backgroundColor: '#043927',
              width: responsiveWidth(50),
              height: responsiveHeight(7),
              marginTop: responsiveHeight(10),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15
            }}
          >
            <View>
              <Text style={{ color: 'white', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }}> GET STARTED</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default StartPage;
