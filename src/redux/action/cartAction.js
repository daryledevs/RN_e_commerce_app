
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
    if(isExist) return false;
    dispatch(ADD_TO_CART(newItem));
  }
}

export function removeCartItem(id){
  return{
    type: 'REMOVE_CART_ITEM',
    payload: ''
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