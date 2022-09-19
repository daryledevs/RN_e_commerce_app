import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AddPage from '../admin/Page/AddPage';
import EditPage from '../admin/Page/EditPage';
import ItemPage from '../admin/Page/ItemPage';
import AppButton from '../shared/AppButton';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

const AdminScreen = () => {
  const navigation = useNavigation();

  function logoutHandler(){
    navigation.navigate("Screen")
  }
  
  return (
    <Stack.Navigator initialRouteName='Item Page' >
      <Stack.Screen name='Add Item' component={AddPage}/>
      <Stack.Screen name='Edit Item' component={EditPage}/>
      <Stack.Screen name='Item Page' component={ItemPage}
        options={{
          headerRight: () => 
            <AppButton 
              title='Logout' 
              buttonStyle={styles.button} 
              onPress={logoutHandler}
          />,
          headerLeft: () => null
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: "red",
    padding: 5, textAlign: "center",
    marginRight: 10
  },
  Text:{

  }
})
export default AdminScreen;