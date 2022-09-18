import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import ItemList from '../Components/ItemList'
import AppButton from '../../shared/AppButton'
import { useNavigation } from '@react-navigation/native'
const ItemPage = () => {
  const navigation = useNavigation();
  function addItemHandler(){
    navigation.navigate("Add Item")
  }

  return (
    <View style={styles.itemPageContainer}>
      <ScrollView>
        <View style={styles.itemTitleContainer}>
          <Text style={styles.textStyle}>ID</Text>
          <Text style={styles.textStyle}>Name</Text>
          <Text style={styles.textStyle}>Price</Text>
          <Text style={styles.textStyle}>Quantity</Text>
          <Text  style={styles.operationContainer}>Operation</Text>
        </View>
        <ItemList />
      </ScrollView>
      <AppButton title='Add' onPress={addItemHandler} buttonStyle={buttonStyle.button}/>
    </View>
  )
}


const styles = StyleSheet.create({
  itemPageContainer: {
    position: 'relative', height: '100%'
  },
  itemTitleContainer:{
    flexDirection: 'row', justifyContent: 'space-between',
  },
  textStyle: {
    borderWidth: 1, textAlign: 'center',
    flex: 1
  },
  operationContainer:{
    borderWidth: 1, textAlign: 'center',
    flex: 2
  }
});

const buttonStyle = StyleSheet.create({
  button:{
    borderRadius: 100, width: 70, height: 70,
    position: 'absolute', right: 10, bottom: 10,
   justifyContent: 'center', backgroundColor: 'green'
  },
  text:{

  }
})
export default ItemPage