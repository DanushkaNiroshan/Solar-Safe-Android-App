import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

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

  function GotoChartPageTwo() {
    stack.navigate('ChartPageTwo');
  }

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const MenuPopup = () => {
    if (isMenuVisible) {
      return (
        <View style={{ backgroundColor: '#4da19a', height: responsiveHeight(41), borderRadius: 10 }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                height: responsiveHeight(5),
                borderRadius: 10,
                marginLeft: responsiveWidth(2),
                marginRight: responsiveWidth(2),
                marginTop: responsiveWidth(3),
                width: responsiveWidth(55)
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  paddingLeft: responsiveWidth(2)
                }}
              >
                History
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                height: responsiveHeight(5),
                borderRadius: 10,
                marginLeft: responsiveWidth(2),
                marginRight: responsiveWidth(2),
                marginTop: responsiveWidth(3)
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', paddingLeft: responsiveWidth(2) }}>
                Maintenance
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                height: responsiveHeight(5),
                borderRadius: 10,
                marginLeft: responsiveWidth(2),
                marginRight: responsiveWidth(2),
                marginTop: responsiveWidth(3)
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', paddingLeft: responsiveWidth(2) }}>
                Measurements
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                height: responsiveHeight(5),
                borderRadius: 10,
                marginLeft: responsiveWidth(2),
                marginRight: responsiveWidth(2),
                marginTop: responsiveWidth(3)
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', paddingLeft: responsiveWidth(2) }}>
                Battery
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                height: responsiveHeight(5),
                borderRadius: 10,
                marginLeft: responsiveWidth(2),
                marginRight: responsiveWidth(2),
                marginTop: responsiveWidth(3)
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', paddingLeft: responsiveWidth(2) }}>
                Setting
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                height: responsiveHeight(5),
                borderRadius: 10,
                marginLeft: responsiveWidth(2),
                marginRight: responsiveWidth(2),
                marginTop: responsiveWidth(3)
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(3), fontWeight: 'bold', paddingLeft: responsiveWidth(2) }}>About</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };
  const handleMenuPress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const [buttonColorOne, setButtonColorOne] = useState('white');
  const [buttonColorTwo, setButtonColorTwo] = useState('white');
  const [buttonColorThree, setButtonColorThree] = useState('white');
  const [buttonColorFour, setButtonColorFour] = useState('white');
  const [buttonColorFive, setButtonColorFive] = useState('white');

  const changeColorOne = () => {
    setButtonColorOne('#66FF00');
  };

  const changeOutColorOne = () => {
    setButtonColorOne('white');
  };

  const changeColorTwo = () => {
    setButtonColorTwo('#66FF00');
  };

  const changeOutColorTwo = () => {
    setButtonColorTwo('white');
  };

  const changeColorThree = () => {
    setButtonColorThree('#66FF00');
  };

  const changeOutColorThree = () => {
    setButtonColorThree('white');
  };

  const changeColorFour = () => {
    setButtonColorFour('#66FF00');
  };

  const changeOutColorFour = () => {
    setButtonColorFour('white');
  };

  const changeColorFive = () => {
    setButtonColorFive('#66FF00');
  };

  const changeOutColorFive = () => {
    setButtonColorFive('white');
  };

  const [iconScaleOne] = useState(new Animated.Value(1));

  const animateIconOne = () => {
    Animated.sequence([
      Animated.timing(iconScaleOne, {
        toValue: -15,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.spring(iconScaleOne, {
        toValue: 0,
        duration: 10,
        tension: 40,
        useNativeDriver: true
      })
    ]).start();
  };

  const [iconScaleTwo] = useState(new Animated.Value(1));

  const animateIconTwo = () => {
    Animated.sequence([
      Animated.timing(iconScaleTwo, {
        toValue: -15,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.spring(iconScaleTwo, {
        toValue: 0,
        duration: 10,
        tension: 40,
        useNativeDriver: true
      })
    ]).start();
  };

  const [iconScaleThree] = useState(new Animated.Value(1));

  const animateIconThree = () => {
    Animated.sequence([
      Animated.timing(iconScaleThree, {
        toValue: -15,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.spring(iconScaleThree, {
        toValue: 0,
        duration: 10,
        tension: 40,
        useNativeDriver: true
      })
    ]).start();
  };

  const [iconScaleFour] = useState(new Animated.Value(1));

  const animateIconFour = () => {
    Animated.sequence([
      Animated.timing(iconScaleFour, {
        toValue: -15,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.spring(iconScaleFour, {
        toValue: 0,
        duration: 10,
        tension: 40,
        useNativeDriver: true
      })
    ]).start();
  };

  const [iconScaleFive] = useState(new Animated.Value(1));

  const animateIconFive = () => {
    Animated.sequence([
      Animated.timing(iconScaleFive, {
        toValue: -15,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.spring(iconScaleFive, {
        toValue: 0,
        duration: 10,
        tension: 40,
        useNativeDriver: true
      })
    ]).start();
  };

  return (
    <>
      <View style={{ position: 'absolute', marginTop: responsiveHeight(55), marginLeft: responsiveWidth(40) }}>
        {MenuPopup()}
      </View>

      <View
        style={{
          backgroundColor: '#4da19a',
          position: 'absolute',
          width: '100%',
          paddingVertical: responsiveHeight(1),
          bottom: 0,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: responsiveWidth(2)
        }}
      >
        <Animated.View style={{ transform: [{ translateY: iconScaleOne }] }}>
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
              onPress={() => {
                animateIconOne();
                GotoHealth();
              }}
              onPressIn={changeColorOne}
              onPressOut={changeOutColorOne}
              color={buttonColorOne}
              name='battery-full'
              size={responsiveWidth(10)}
              style={{ transform: [{ rotate: '90deg' }] }}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ transform: [{ translateY: iconScaleTwo }] }}>
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
            <MaterialIcons
              onPress={() => {
                GotoChartPageTwo();
                animateIconTwo();
              }}
              name='circle'
              size={responsiveWidth(10)}
              color={buttonColorTwo}
              onPressIn={changeColorTwo}
              onPressOut={changeOutColorTwo}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ transform: [{ translateY: iconScaleThree }] }}>
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
            <MaterialIcons
              onPress={() => {
                GotoHome();
                animateIconThree();
              }}
              name='home'
              size={responsiveWidth(10)}
              color={buttonColorThree}
              onPressIn={changeColorThree}
              onPressOut={changeOutColorThree}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ transform: [{ translateY: iconScaleFour }] }}>
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
            <Entypo
              onPress={() => {
                GotoChartPage();
                animateIconFour();
              }}
              name='line-graph'
              size={responsiveWidth(7)}
              color={buttonColorFour}
              onPressIn={changeColorFour}
              onPressOut={changeOutColorFour}
            />
          </View>
        </Animated.View>

        <Animated.View style={{ transform: [{ translateY: iconScaleFive }] }}>
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
            <MaterialIcons
              onPress={() => {
                handleMenuPress();
                animateIconFive();
              }}
              name='menu'
              size={responsiveWidth(10)}
              color={buttonColorFive}
              onPressIn={changeColorFive}
              onPressOut={changeOutColorFive}
            />
          </View>
        </Animated.View>
      </View>
    </>
  );
};

export default NavigationIcon;
