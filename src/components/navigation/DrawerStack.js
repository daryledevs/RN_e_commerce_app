import React from 'react'
// components
import UserHomeScreen from '../user/pages/UserHomeScreen';
import Cart from '../user/pages/Cart';
import Receipt from '../user/pages/Receipt';
// libraries
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
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
    <Drawer.Navigator 
      useLegacyImplementation
      drawerContent={(props) => <Foo {...props} />}
      screenOptions={{
        headerShown: true,
        headerTransparent:true
      }}
    >
      <Drawer.Screen name="Home" component={UserHomeScreen} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Receipt" component={Receipt} />  
    </Drawer.Navigator>
  )
}

export default DrawerStack;
