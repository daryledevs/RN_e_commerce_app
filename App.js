import React from 'react';
// components
import DrawerStack from './src/components/navigation/DrawerStack';
import Screen from './src/components/navigation/Screen';
import AdminScreen from './src/components/navigation/AdminScreen';
//redux
import store from './src/redux/store'
// libraries
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
// const Stack = createStackNavigator();
import ItemDetails from './src/components/user/components/User Home Screen/ItemDetails';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen'  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Screen" component={Screen} />
          <Stack.Screen name="User" component={DrawerStack} />
          <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="Item Details" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
