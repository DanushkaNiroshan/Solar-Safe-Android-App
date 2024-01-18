import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import NavigationScreen from './assets/Screens/NavigationScreen';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <NavigationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
