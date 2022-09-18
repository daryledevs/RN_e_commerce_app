function ADD_ITEM(newItem){
  return{
    type: 'ADD_ITEM',
    payload: newItem
  }
}

export function addItem(newItem){
  return function(dispatch, getState){
    const itemData = getState().item;
    const id = itemData.length + 1
    const recplica = { ...newItem, id };
    dispatch(ADD_ITEM(recplica));
  }
}

function EDIT_ITEM(edited){
  return{
    type: 'EDIT_ITEM',
    payload: edited
  }
}

export function editItem(changeItem){
  return function(dispatch, getState){
    const itemData = getState().item;
    const editThisIndex = itemData.find((item) => item.id === changeItem.id);
    const index = itemData.indexOf(editThisIndex);
    itemData[index] = changeItem;
    const updateItem = [...itemData]
    dispatch(EDIT_ITEM(updateItem))
  }
}

function DELETE_ITEM(filtered){
  return{
    type: 'DELETE_ITEM',
    payload: filtered
  }
}

export function deleteItem(id){
  return function(dispatch, getState){
    const itemData = getState().item;
    const filtered = itemData.filter((item) => item.id !== id);
    dispatch(DELETE_ITEM(filtered));
  }
}