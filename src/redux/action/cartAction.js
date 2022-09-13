
import { Alert } from 'react-native'

function ADD_TO_CART(newItem){
  return {
    type: 'ADD_TO_CART',
    payload: newItem
  }
}

export function addToCart(newItem){
  return function(dispatch, getState){
    const items = getState().cart.itemList;
    const isExist = items.find(item => item.id === newItem.id);
    // create something  that will prompt the person later if it exist
    if(isExist) {
      Alert.alert(
        "Item is already Exists!",
        "This item is already in the cart.",
        [
          { text: "OK" }
        ]
      );
      return false
    };
    dispatch(ADD_TO_CART(newItem));
  }
}

function REMOVE_CART_ITEM(filtered){
  return{
    type: 'REMOVE_CART_ITEM',
    payload: filtered
  }
}
export function removeCartItem(id){
  return function(dispatch, getState){
    const items = getState().cart.itemList;
    const filteredCart = items.filter((item) => item.id !== id);
    dispatch(REMOVE_CART_ITEM(filteredCart));
  }
}

export function increaseQuantity(){
  return{
    type: 'INCREASE_QUANTITY',
  }
}

export function decreaseQuantity(){
  return{
    type: 'DECREASE_QUANTITY',
  }
}

export function clearItems(){
  return{
    type: 'CLEAR_ITEMS',
    payload: ''
  }
}

export function cancelBuy(){
  return{
    type: 'CANCEL_BUY',
  }
}