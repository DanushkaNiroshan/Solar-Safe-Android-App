import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { useState, useEffect } from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import NavigationIcon from './NavigationIcon';

const ChartPage = (p) => {
  const stack = p.navigation;

  return (
    <View style={{ flex: 1, backgroundColor: '#01796F' }}>
      <View>
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
          <Text style={{ color: 'white', fontSize: responsiveFontSize(3),fontWeight: 'bold' }}>Graphs</Text>
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: responsiveWidth(4),
            marginLeft: responsiveWidth(4),
            marginTop: responsiveHeight(1)
          }}
        >
          <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>Charging Discharging Curve</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>19 </Text>
            <Text style={{ fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' }}> hrs</Text>
            <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}> 25 </Text>
            <Text style={{ fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' }}> mins</Text>
          </View>
        </View>

        <LineChart
          data={{
            datasets: [{ data: [0, 1, 2, 3, 4 ] }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={responsiveHeight(18)}
          yAxisSuffix='A'
          yAxisInterval={6} // optional, defaults to 1
          chartConfig={{
            // backgroundGradientFrom: "#4da19a",
            strokeWidth: 5,
            backgroundGradientFrom: '#4da19a',
            backgroundGradientTo: '#4da19a',
            decimalPlaces: 2,
            color: (opacity = 5) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

            backgroundGradientTo: '#4da19a',

            color: (opacity = 3) => `rgb(0,255,0), ${opacity})`,
            labelColor: (opacity = 1) => `rgb(255,255,255), ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '2',
              strokeWidth: '2',
              stroke: 'white'
            }
          }}
          bezier
          style={{
            // marginVertical: responsiveHeight(10),
            paddingTop: responsiveHeight(3),
            marginLeft: responsiveWidth(3),
            marginRight: responsiveWidth(5),
            marginTop: responsiveHeight(-2),
            borderRadius: 20
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveHeight(1),
            justifyContent: 'space-between',
            marginRight: responsiveWidth(3),
            marginLeft: responsiveWidth(30)
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: 'rgb(0,255,0)',
                borderRadius: 100,
                width: responsiveWidth(5),
                height: responsiveHeight(2.5)
              }}
            ></View>
            <Text style={{ fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(3), color: 'white', fontWeight: 'bold' }}>
              Current
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{ backgroundColor: 'red', width: responsiveWidth(5), borderRadius: 100, height: responsiveHeight(2.5) }}
            ></View>
            <Text style={{ fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(4), color: 'white', fontWeight: 'bold' }}>
              Discharging
            </Text>
          </View>
        </View>
      </View>

      <TemperatureCurve />
      <BatteryUsage />
      <NavigationIcon stack={stack} />
    </View>
  );
};

export default ChartPage;

function TemperatureCurve() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: responsiveWidth(4),
          marginLeft: responsiveWidth(4),
          marginTop: responsiveHeight(3)
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>Battery Temperature curve</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>19 </Text>
          <Text style={{ fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' }}> hrs</Text>
          <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}> 25 </Text>
          <Text style={{ fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' }}> mins</Text>
        </View>
      </View>

      <LineChart
        data={{
          datasets: [{ data: [0, 10, 20, 30, 40] }]
        }}
        width={Dimensions.get('window').width} // from react-native
        height={responsiveHeight(18)}
        yAxisSuffix='°C'
        yAxisInterval={6} // optional, defaults to 1
        chartConfig={{
          // backgroundGradientFrom: "#4da19a",
          strokeWidth: 5,
          backgroundGradientFrom: '#4da19a',
          backgroundGradientTo: '#4da19a',
          decimalPlaces: 2,
          color: (opacity = 5) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          backgroundGradientTo: '#4da19a',

          color: (opacity = 3) => `rgb(255,0,0), ${opacity})`,
          labelColor: (opacity = 1) => `rgb(255,255,255), ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '2',
            strokeWidth: '2',
            stroke: 'white'
          }
        }}
        bezier
        style={{
          // marginVertical: responsiveHeight(10),
          paddingTop: responsiveHeight(3),
          marginLeft: responsiveWidth(3),
          marginRight: responsiveWidth(5),
          marginTop: responsiveHeight(-2),
          borderRadius: 20
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          marginTop: responsiveHeight(1),
          justifyContent: 'space-between',
          marginRight: responsiveWidth(3),
          marginLeft: responsiveWidth(65)
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{ backgroundColor: 'red', width: responsiveWidth(5), borderRadius: 100, height: responsiveHeight(2.5) }}
          ></View>
          <Text style={{ fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(4), color: 'white', fontWeight: 'bold' }}>
            Temperature
          </Text>
        </View>
      </View>
    </View>
  );
}

function BatteryUsage() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: responsiveWidth(4),
          marginLeft: responsiveWidth(4),
          marginTop: responsiveHeight(3)
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>Battery Voltage</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}>19 </Text>
          <Text style={{ fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' }}> hrs</Text>
          <Text style={{ fontSize: responsiveFontSize(2), color: 'white', fontWeight: 'bold' }}> 25 </Text>
          <Text style={{ fontSize: responsiveFontSize(1.5), color: 'white', fontWeight: 'bold' }}> mins</Text>
        </View>
      </View>

      <LineChart
        data={{
          datasets: [{ data: [0, 1, 2, 3, 4, 4.2] }]
        }}
        width={Dimensions.get('window').width} // from react-native
        height={responsiveHeight(18)}
        yAxisSuffix='V'
        // yAxisSuffix="%"
        yAxisInterval={6} // optional, defaults to 1
        chartConfig={{
          // backgroundGradientFrom: "#4da19a",
          strokeWidth: 5,
          backgroundGradientFrom: '#4da19a',
          backgroundGradientTo: '#4da19a',
          decimalPlaces: 2,
          color: (opacity = 5) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          backgroundGradientTo: '#4da19a',

          color: (opacity = 3) => `rgb(0,0,255), ${opacity})`,
          labelColor: (opacity = 1) => `rgb(255,255,255), ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '2',
            strokeWidth: '2',
            stroke: 'white'
          }
        }}
        bezier
        style={{
          // marginVertical: responsiveHeight(10),
          paddingTop: responsiveHeight(3),
          marginLeft: responsiveWidth(3),
          marginRight: responsiveWidth(5),
          marginTop: responsiveHeight(-2),
          borderRadius: 20
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          marginTop: responsiveHeight(1),
          justifyContent: 'space-between',
          marginRight: responsiveWidth(3),
          marginLeft: responsiveWidth(67)
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{ backgroundColor: 'blue', width: responsiveWidth(5), borderRadius: 100, height: responsiveHeight(2.5) }}
          ></View>
          <Text style={{ fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(4), color: 'white', fontWeight: 'bold' }}>
            Voltage
          </Text>
        </View>
      </View>
    </View>
  );
}
