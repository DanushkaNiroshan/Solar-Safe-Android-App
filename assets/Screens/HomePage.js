import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import CircularProgress from 'react-native-circular-progress-indicator';
import NavigationIcon from './NavigationIcon';
import BatterySvg from '../../assets/svg/battery';
import { db, ref, onValue } from '../../firebase';
import { useIsFocused } from '@react-navigation/native';

const HomePage = (p) => {
  const stack = p.navigation;
  const focus = useIsFocused();

  const [loading, setLoading] = useState(true);
  const [sensorData, setSensorData] = useState({}); // sensor data from firebase

  useEffect(() => {
    const data = ref(db);
    onValue(data, (snapshot) => {
      setSensorData(snapshot.val().sensor_data);
      if (snapshot.val().sensor_data) {
        setLoading(false);
      }
    });
  }, [db, focus]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size={'large'} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
      ) : (
        <View style={{ flex: 1, backgroundColor: '#01796F', width: responsiveWidth(100), height: '100%' }}>
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
            <Text style={{ color: 'white', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>HOME</Text>
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

          <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: responsiveHeight(2), marginBottom: responsiveHeight(2) }}>
              <Text style={{ color: 'white', fontSize: responsiveFontSize(3.5), fontWeight: 'bold' }}>SOLAR SAFE</Text>
            </View>
            <View style={{ alignItems: 'center', gap: 20, display: 'flex', flexDirection: 'column' }}>
              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-evenly'
                }}
              >
                <CustomComponent value={sensorData.Vbat1} title={'V'} text={'Voltage\nCell 1'} maxValue={4.2} />
                <CustomComponent value={sensorData.Vbat2} title={'V'} text={'Voltage\nCell 2'} maxValue={4.2} />
                <CustomComponent value={sensorData.Vbat3} title={'V'} text={'Voltage\nCell 3'} maxValue={4.2} />
              </View>
              <View style={{ flexDirection: 'row', display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <CustomComponent value={sensorData.current} title={'mA'} text={'Current'} maxValue={100} />
                <CustomComponent value={sensorData.Temp} title={'°C'} text={'Temperature'} />
              </View>
              <BatteryStatus soc={sensorData.soc} />
            </View>
          </View>
          <NavigationIcon stack={stack} />
        </View>
      )}
    </>
  );
};

export default HomePage;

const BatteryStatus = ({ soc }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <BatterySvg />
      <Text style={{ color: 'white', fontSize: responsiveFontSize(4.5), fontWeight: 'bold' }}>{soc ? soc : 0} %</Text>
      <Text style={{ color: 'white', fontSize: responsiveFontSize(2.5), fontWeight: 'bold' }}>State of Charge</Text>
    </View>
  );
};

const CustomComponent = ({ value, title, text, maxValue }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <CustomCircularProgress value={value ? value : 0} title={title} maxValue={maxValue} />
      <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: 'bold', color: 'white' }}>{text}</Text>
    </View>
  );
};

const CustomCircularProgress = ({ value, title, maxValue }) => {
  return (
    <CircularProgress
      value={value ? value : 0}
      radius={60}
      duration={3000}
      progressValueColor={'#ecf0f1'}
      titleFontSize={responsiveFontSize(2.2)}
      titleColor={'white'}
      title={title}
      maxValue={maxValue}
      titleStyle={{ fontWeight: 'bold' }}
      inActiveStrokeColor='#4da19a'
      inActiveStrokeOpacity={0.6}
      inActiveStrokeWidth={responsiveWidth(5)}
      activeStrokeColor='#66FF00'
      activeStrokeWidth={responsiveWidth(5)}
      progressFormatter={(value) => {
        'worklet';

        return value.toFixed(2); // 2 decimal places
      }}
    />
  );
};
