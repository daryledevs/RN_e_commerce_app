import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../../redux/reducer/cartReducer';

const CartItems = ({ productName, productPrice, itemQuantity}) => {
  const cartItems = useSelector(selectCartItems);
  let total = 0;
  let id, quantity, name, price;
  let cart_replica = [];
  cartItems.forEach(item => {
    id = item.id;
    name = item.productName;
    price = item.productPrice;
    quantity = item.quantity;
    total += item.totalPrice;
    cart_replica.push({id, name, quantity, price})
  });
  return (
    <View style={styles.CartItemsContainer}>
      <Text style={styles.textStyle}>{productName}</Text>
      <Text style={styles.textStyle}>{productPrice}</Text>
      <View style={styles.quantityContainer}>
        <Button title='-' />
        <Text style={styles.quantityContainer__text}>{itemQuantity}</Text>
        <Button title='+' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CartItemsContainer:{
    flexDirection: 'row', alignSelf: 'stretch'
  },
  textStyle: {
    flex: 1, alignSelf: 'stretch',
    borderWidth: 1, borderTopColor: 'transparent',
    textAlign: 'center', textAlignVertical: 'center'
  },
  quantityContainer:{
    flex: 1, alignSelf: 'stretch', flexDirection: 'row',
    borderWidth: 1, borderTopColor: 'transparent',
    alignItems: 'baseline', justifyContent: 'center'
  },
  quantityContainer__text:{
    marginHorizontal: 5, marginVertical: 5
  }
});
export default CartItems