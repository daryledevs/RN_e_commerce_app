import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../../redux/reducer/cartReducer';
import { selectAllItems } from '../../../../redux/reducer/itemReducer';

const CartList = () => {
  const cartItems = useSelector(selectCartItems);
  const itemData = useSelector(selectAllItems);
  const [quantityCounter, setQuantityCounter] = React.useState(0);
  let total = 0;
  let id, quantity, name, price;
  let cart_replica = [];
  cartItems.forEach(item => {
    id = item.id;
    name = item.productName;
    price = item.productPrice;
    quantity = item.itemQuantity;
    total += item.totalPrice;
    cart_replica.push({id, name, quantity, price})
  });

  React.useEffect(() => {
    
  })
  function quantityHandler({id, num}){
    const targetItem = itemData.find((item) => item.id === id);
    let targetCart = cart_replica.find((cart) => cart.id === id);
    cart_replica.forEach(
      (item) => {
        if(item.id === id){
          Object.keys(item).find(key => {
            if(key === 'quantity'){
              if(num === 1 && targetCart.quantity < targetItem.availableItem){
                item[key] = targetCart.quantity + 1;
              }
              if(num === 0 && targetCart.quantity > 0) {
                item[key] = targetCart.quantity - 1;
              }
            }
          })
        }
      });

  }
  return (
    <>
    {cart_replica.map((item) => (
      <View style={styles.CartItemsContainer} key={item.id}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={styles.textStyle}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <Button title='-' onPress={() => quantityHandler({id : item.id, num: 0})}/>
          <Text style={styles.quantityContainer__text}>{item.quantity}</Text>
          <Button title='+' onPress={() => quantityHandler({id : item.id, num: 1})}/>
        </View>
      </View>
      ))}
    </>
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
export default CartList;