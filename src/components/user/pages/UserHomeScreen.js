import React from 'react'
import List from '../components/User Home Screen/List';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const UserHomeScreen = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='List' component={List} />
    </Stack.Navigator>
  )
}

export default UserHomeScreen
