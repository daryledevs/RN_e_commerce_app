import React from 'react'
import { FlatList, StyleSheet, View, Text, SafeAreaView, SafeAreaViewComponent } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CartList from '../components/Cart/CartList'

const Cart = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true
    });
  }, []);
  
  return (
    <View>
      <View style={styles.cartListContainer}>
        <Text style={styles.textStyle}>Name</Text>
        <Text style={styles.textStyle}>Price</Text>
        <Text style={styles.textStyle}>Quantity</Text>
      </View>
      <CartList/>
    </View>
  )
}


const styles = StyleSheet.create({
  cartListContainer:{
    flexDirection: 'row', justifyContent: 'space-between'
  },
  textStyle: {
    borderWidth: 1, textAlign: 'center',
    flex: 1
  }
});

export default Cart