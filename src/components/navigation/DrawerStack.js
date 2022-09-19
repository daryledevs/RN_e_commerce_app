import React from 'react'
// components
import UserHomeScreen from '../user/pages/UserHomeScreen';
import Cart from '../user/pages/Cart';
import Receipt from '../user/pages/Receipt';
import Screen from './Screen';
// libraries
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
const DrawerStack = () => {
  const [hideHeader, setHideHeader] = React.useState(false);
  const navigation = useNavigation();

  function Foo(props){
    return( 
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => navigation.navigate("Screen")} />
     </DrawerContentScrollView>
    )
  }

  return (
    <Drawer.Navigator screenOptions={!hideHeader && {headerShown: false}} 
      useLegacyImplementation
      drawerContent={(props) => <Foo {...props} />}
    >
      <Drawer.Screen name="Home">
        {() => <UserHomeScreen setHideHeader={setHideHeader} />}
      </Drawer.Screen>
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Receipt" component={Receipt} />    
    </Drawer.Navigator>
  )
}

export default DrawerStack;
