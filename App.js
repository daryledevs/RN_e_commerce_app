import React from 'react'
// components
import UserHomeScreen from './src/components/user/pages/UserHomeScreen';
import Cart from './src/components/user/pages/Cart';
import Receipt from './src/components/user/pages/Receipt';
//redux
import store from './src/redux/store'
// libraries
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
const App = () => {

  const [hideHeader, setHideHeader] = React.useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Drawer.Navigator screenOptions={{headerShown: false}} */}
        <Drawer.Navigator screenOptions={!hideHeader && {headerShown: false}}>
          <Drawer.Screen name="Home">
            {() => <UserHomeScreen setHideHeader={setHideHeader} />}
          </Drawer.Screen>
          <Drawer.Screen name="Cart" component={Cart} />
          <Drawer.Screen name="Receipt" component={Receipt} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;


// {() => <UserHomeScreen setHideHeader={setHideHeader}/>}