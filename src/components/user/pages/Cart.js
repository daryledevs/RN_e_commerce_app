import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
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
    <View style={styles.cartContainer}>
      <View style={styles.cartTitleContainer}>
        <Text style={styles.textStyle}>Name</Text>
        <Text style={styles.textStyle}>Price</Text>
        <Text style={styles.textStyle}>Quantity</Text>
        <Text  style={styles.textStyle}>Operation</Text>
      </View>
      <CartList/>
      <View style={styles.placeOrderContainer}>
        <Button title='Place order' />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  cartContainer: {
    position: 'relative', height: '100%'
  },
  cartTitleContainer:{
    flexDirection: 'row', justifyContent: 'space-between'
  },
  textStyle: {
    borderWidth: 1, textAlign: 'center',
    flex: 1
  },
  placeOrderContainer:{
    position: 'absolute',
    bottom: 5, right: 5
  }
});

export default Cart