import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/Screens/HomePage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
// import Login from './src/Screens/Stack/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SurahDetailsScreen from './src/Screens/SurahDetailsScreen';
// import Admin from './src/Screens/Stack/Admin';
// import Home from './src/Screens/Stack/Home';
// import TabsNavigator from './src/Screens/TabsNavigator';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="SurahDetail" component={SurahDetailsScreen} />
        {/* <Stack.Screen name="TabsNavigator" component={TabsNavigator} options={{headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>	
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


{/* */}