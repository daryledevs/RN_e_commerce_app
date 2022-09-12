export function addItem(newItem){
  return{
    type: 'ADD_ITEM',
    payload: { newItem }
  }
}

export function editItem(changeItem){
  return{
    type: 'EDIT_ITEM',
    payload: { changeItem }
  }
}