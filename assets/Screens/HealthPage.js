import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import NavigationIcon from './NavigationIcon';

const HealthPage = (p) => {
  const stack = p.navigation;

  return (
    <View style={{ flex: 1, backgroundColor: '#01796F', width: responsiveWidth(100), height: responsiveHeight(100) }}>
      <View
        style={{
          backgroundColor: '#4da19a',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: responsiveWidth(3),
          paddingRight: responsiveWidth(3),
          marginTop: responsiveHeight(0),
          height: responsiveHeight(12),
          paddingTop: responsiveHeight(5)
        }}
      >
        <Text style={{ color: 'white', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>Healthy</Text>
        <View
          style={{
            backgroundColor: '#01796F',
            height: responsiveHeight(5),
            width: responsiveWidth(10),
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity>
            <Ionicons name='md-notifications' color='white' style={{ fontSize: responsiveFontSize(4) }} />
          </TouchableOpacity>
        </View>
      </View>
      <PresentBar />
      <Middle />
      <NavigationIcon stack={stack} />
    </View>
  );
};

export default HealthPage;

function PresentBar() {
  return (
    <View style={{ marginTop: responsiveHeight(2), marginLeft: responsiveWidth(2), marginRight: responsiveWidth(2) }}>
      <Text style={{ color: 'white', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>95%</Text>
      <Progress.Bar
        progress={0.95}
        size={40}
        width={360}
        color={'#7fff00'}
        style={{ marginTop: responsiveHeight(1), width: responsiveWidth(90) }}
      />
    </View>
  );
}

function Middle() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <View style={{ marginTop: responsiveHeight(3), justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: '#80Bcb7',
          borderRadius: 15,
          height: responsiveHeight(10),
          justifyContent: 'center',
          alignItems: 'center',
          width: responsiveWidth(70)
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(4), color: 'black', fontWeight: 'bold' }}>Healthy</Text>
        <Text style={{ color: 'black', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>Good Healthy</Text>
      </View>

      <View
        style={{
          backgroundColor: '#80Bcb7',
          marginTop: responsiveHeight(5),
          borderRadius: 15,
          height: responsiveHeight(10),
          justifyContent: 'center',
          alignItems: 'center',
          width: responsiveWidth(70)
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(4), color: 'black', fontWeight: 'bold' }}>167</Text>
        <Text style={{ color: 'black', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>Charge Cycles</Text>
      </View>

      <View
        style={{
          backgroundColor: '#80Bcb7',
          marginTop: responsiveHeight(5),
          borderRadius: 15,
          height: responsiveHeight(10),
          justifyContent: 'center',
          alignItems: 'center',
          width: responsiveWidth(70)
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(3), color: 'black', fontWeight: 'bold' }}>{`${day}/${month}/${year}`}</Text>
        <Text style={{ color: 'black', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>Today</Text>
      </View>

      <View
        style={{
          backgroundColor: '#80Bcb7',
          marginTop: responsiveHeight(5),
          borderRadius: 15,
          height: responsiveHeight(25),
          justifyContent: 'center',
          alignItems: 'center',
          width: responsiveWidth(80)
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(3), color: 'white', fontWeight: 'bold' }}>Battery Details</Text>
        <Text style={{ color: 'black', fontSize: responsiveFontSize(1.5), fontWeight: 'bold' }}>
        ⚛️ Type: Lithium-ion. {'\n'}
        ⚡ Nominal Voltage: 3.6 to 3.7V. {'\n'}
        🔋 Capacity: 2000mAh to 3500mAh. {'\n'}
        🔌 C-rating: Indicates discharge rate. {'\n'}
        🔌 Charging Voltage: 4.2V. {'\n'}
        🔄 Internal Resistance: Influences efficiency. {'\n'}
        🔄 Cycle Life: Determines lifespan. {'\n'}
        ⏳ Self-Discharge Rate: Indicates storage stability. {'\n'}
        🌡️ Operating Temperature: Specified range.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#00bfff',
            marginTop: responsiveHeight(1),
            width: responsiveWidth(50),
            height: responsiveHeight(4),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15
          }}
        >
          <View>
            <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}> GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
