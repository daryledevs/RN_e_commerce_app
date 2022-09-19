import React from 'react'
// components
import UserHomeScreen from '../user/pages/UserHomeScreen';
import Cart from '../user/pages/Cart';
import Receipt from '../user/pages/Receipt';
import Screen from './Screen';
// libraries
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
const DrawerStack = () => {
  const [hideHeader, setHideHeader] = React.useState(false);
  return (
    <Drawer.Navigator screenOptions={!hideHeader && {headerShown: false}} >
      <Drawer.Screen name="Home">
        {() => <UserHomeScreen setHideHeader={setHideHeader} />}
      </Drawer.Screen>
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Receipt" component={Receipt} />
      <Drawer.Screen name="Logout" component={Screen} 
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerStack;
