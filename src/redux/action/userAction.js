export function addToReceipt(itemToReceipt){
  console.log('CART ACTION')
  console.log(itemToReceipt)
  return{
    type: 'ADD_TO_RECEIPT',
    payload: itemToReceipt
  }
}

export function addBalance(addToBalance){
  return{
    type: 'ADD_BALANCE',
    payload: addToBalance
  }
}

export function updateBalance(decreaseToBalance){
  return{
    type: 'UPDATE_BALANCE',
    payload: decreaseToBalance
  }
}