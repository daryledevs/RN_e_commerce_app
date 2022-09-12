import React from 'react'
import List from '../components/User Home Screen/List';
import { createStackNavigator } from '@react-navigation/stack';
import ItemDetails from '../components/User Home Screen/ItemDetails';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

const Stack = createStackNavigator();
const UserHomeScreen = ({ setHideHeader }) => {
  function backHandler(){
    navigation.navigate('List')
    setHideHeader(true);
  }
  const navigation = useNavigation();
  return (
    // initialRouteName not working, try this
    // https://github.com/react-navigation/react-navigation/issues/7984
    <Stack.Navigator >
      <Stack.Screen name='List' > 
        {() => <List setHideHeader={setHideHeader}/>}
      </Stack.Screen>
      <Stack.Screen name='Item Details' component={ItemDetails} 
        options={{
          headerLeft: () => <Button title='Back' onPress={backHandler}/>
        }}
      />
    </Stack.Navigator>
  )
}

export default UserHomeScreen