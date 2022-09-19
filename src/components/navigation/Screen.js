import { View, StyleSheet } from 'react-native'
import React from 'react'
import AppButton from '../shared/AppButton'
import { useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Screen = () => {
  const navigation = useNavigation();
  function buttonNavigation(isUser){
    if(isUser){
      navigation.navigate('User');
    } else {
      navigation.navigate('Admin');
    }
  }

  return (
    <View style={styles.screenContainer}>
      <AppButton title='User'  
        onPress={() => buttonNavigation(true)} 
        buttonStyle={styles.user}
      />
      <AppButton title='Admin' 
        onPress={() => buttonNavigation(false)}
        buttonStyle={styles.admin}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer:{
    justifyContent: "center", height: "100%"
  },
  user:{
    backgroundColor: "green",
    borderRadius: 100, marginVertical: 10, padding: 5,
    width: "80%", alignSelf: "center"
  },
  admin:{
    backgroundColor: "red",
    borderRadius: 100, padding: 5,
    width: "80%", alignSelf: "center"
  }
})

export default Screen