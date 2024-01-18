import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import NavigationIcon from './NavigationIcon';

const NotificationView = ({ onDismiss }) => {
  const handleConfirmation = () => {
    Alert.alert(
      'Maintenance Confirmation',
      'Do you want to confirm that maintenance is not required?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: onDismiss, // Dismiss the notification on 'Yes'
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableOpacity onPress={handleConfirmation}>
      <View
        style={{
          backgroundColor: '#1e90ff', // Customize the background color
          padding: responsiveWidth(3),
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}>
          🛎 New Notification: Maintenance is Not Required
        </Text>
        <Text style={{ color: 'white', fontSize: responsiveFontSize(2), marginTop: responsiveHeight(0.5), fontWeight: 'bold' }}>
          Today: {new Date().toLocaleDateString()}
        </Text>
        <Text style={{ color: 'white', fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(1) }}>❌</Text>
      </View>
    </TouchableOpacity>
  );
};

const ChartPageTwo = (p) => {
  const stack = p.navigation;
  const [showNotification, setShowNotification] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update the date every minute

    return () => clearInterval(interval);
  }, []);

  const dismissNotification = () => {
    setShowNotification(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#01796F' }}>
      {/* Top Container */}
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
          paddingTop: responsiveHeight(5),
        }}
      >
        <Text style={{ color: 'white', fontSize: responsiveFontSize(3), fontWeight: 'bold' }}>
          Predictive Maintenance
        </Text>
        <View
          style={{
            backgroundColor: '#01796F',
            height: responsiveHeight(5),
            width: responsiveWidth(10),
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: responsiveFontSize(4) }}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      {showNotification && <NotificationView onDismiss={dismissNotification} />}

      {/* Middle Container */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: responsiveFontSize(2), fontWeight: 'bold' }}></Text>
      </View>

      <NavigationIcon stack={stack} />
    </View>
  );
};

export default ChartPageTwo;
