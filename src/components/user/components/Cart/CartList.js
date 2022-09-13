import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../../../../redux/action/cartAction';
import { selectCartItems } from '../../../../redux/reducer/cartReducer';
import { selectAllItems } from '../../../../redux/reducer/itemReducer';

const CartList = () => {
  const dispatch = useDispatch();
  
  const cartItems = useSelector(selectCartItems);
  const itemData = useSelector(selectAllItems);
  let id, quantity, name, price;
  let cart_replica = [];
  cartItems.forEach(item => {
    id = item.id;
    name = item.productName;
    price = item.productPrice;
    quantity = item.itemQuantity;
    cart_replica.push({id, name, quantity, price})
  });

  const [state, setState] = React.useState(cart_replica);

  React.useEffect(() => {
    setState(cart_replica);
    // this took me so long to realized, add cartItems here so whenever there is new item added to the cart
    // this effect would render and then updates the setState and prevents infinite loop. GG.
  }, [cartItems])

  function quantityHandler({id, isIncrement}){
    const targetItem = itemData.find((item) => item.id === id);
    let newCopy = [...state];
    let targetValue = newCopy.find(copy => copy.id === id);
    let index = newCopy.indexOf(targetValue);
    let isExceed = (newCopy[index].quantity < targetItem.availableItem), isTooLow = (newCopy[index].quantity > 0);

    if(isIncrement && isExceed) newCopy[index].quantity = newCopy[index].quantity + 1;
    if(!isIncrement && isTooLow) newCopy[index].quantity = newCopy[index].quantity - 1;
    setState(newCopy);
  }

  function removeItemHandler(id){
    let newCopy = [...state];
    let deleteThis = newCopy.filter(copy => copy.id !== id);
    setState(deleteThis);
    dispatch(removeCartItem(id));
  }
  return (
    <>
    {state.map((item) => (
      <View style={styles.CartItemsContainer} key={item.id}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Text style={styles.textStyle}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <Button title='-' onPress={() => quantityHandler({id : item.id, isIncrement: false})}/>
          <Text style={styles.quantityContainer__text}>{item.quantity}</Text>
          <Button title='+' onPress={() => quantityHandler({id : item.id, isIncrement: true})}/>
        </View>
        <View style={styles.operationContainer}>
          <Button title='X' onPress={() => removeItemHandler(item.id)}/>
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
  },
  operationContainer:{
    flex: 1, alignSelf: 'stretch', flexDirection: 'row',
    justifyContent: 'center', borderWidth: 1, borderTopColor: 'transparent',
  }
});
export default CartList;