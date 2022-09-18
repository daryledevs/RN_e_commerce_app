import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AddPage from '../admin/Page/AddPage';
import EditPage from '../admin/Page/EditPage';
import ItemPage from '../admin/Page/ItemPage';
const Stack = createStackNavigator();
const AdminScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Item Page' >
      <Stack.Screen name='Add Item' component={AddPage}/>
      <Stack.Screen name='Edit Item' component={EditPage}/>
      <Stack.Screen name='Item Page' component={ItemPage}/>
    </Stack.Navigator>
  )
}

export default AdminScreen;