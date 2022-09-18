import { View, Text } from 'react-native'
import React from 'react'
import AppButton from '../shared/AppButton'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Screen = () => {
  const navigation = useNavigation();
  function buttonNavigation(isUser){
    if(isUser === true){
      navigation.navigate('User');
    } else {
      navigation.navigate('Admin');
    }
  }

  return (
    <View>
      <AppButton title='User' onPress={() => buttonNavigation({isUser: true})} />
      <AppButton title='Admin' onPress={() => buttonNavigation({isUser: false})}/>
    </View>
  )
}

export default Screen