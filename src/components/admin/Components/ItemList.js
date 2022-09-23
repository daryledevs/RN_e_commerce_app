import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllItems } from '../../../redux/reducer/itemReducer';
import { deleteItem } from '../../../redux/action/ItemAction';
import AppButton from '../../shared/AppButton';
import { useNavigation } from '@react-navigation/native';
import ModalDoubleBtn from '../../shared/ModalDoubleBtn';
const ItemList = () => {
  const items = useSelector(selectAllItems);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  let removeItem = 0;

  const [triggerRemoveConfirm, setTriggerRemoveConfirm] = useState(false);
  const [getId, setGetId] = useState(0)

  return (
    <View>

      <ModalDoubleBtn 
        title='Remove item?'
        message='Once the item is being deleted, it can not be return.'
        triggerModal={triggerRemoveConfirm}
        cancel={() => { setTriggerRemoveConfirm(!triggerRemoveConfirm)}}
        confirm={() => {
          setTriggerRemoveConfirm(!triggerRemoveConfirm);
          dispatch(deleteItem(getId));
        }}
      />

      {items.map((item) => (
        <View style={styles.itemListContainer} key={item.id}>
          <Text style={styles.textStyle}>{item.id}</Text>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.textStyle}>{item.price}</Text>
          <Text style={styles.textStyle}>{item.availableItem}</Text>
          <View style={styles.operationContainer}>
            <AppButton title="Edit" buttonStyle={buttonStyle.edit} textStyle={buttonStyle.text} onPress={() => {
              navigation.navigate('Edit Item', { itemId: item.id })
            }} />
            <AppButton title="Remove"  buttonStyle={buttonStyle.remove} textStyle={buttonStyle.text} onPress={() => {
              setTriggerRemoveConfirm(!triggerRemoveConfirm);
              setGetId(item.id);
            }}/>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  itemListContainer:{
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
  operationContainer:{
    flex: 2, alignSelf: 'stretch', flexDirection: 'row',
    justifyContent: 'space-around', borderWidth: 1, borderTopColor: 'transparent', 
  }
});

const buttonStyle = StyleSheet.create({
  edit:{
     marginVertical: 5,
     padding: 6, backgroundColor: 'lightgreen'
  },
  remove:{
   marginVertical: 5,
    padding: 6, backgroundColor: 'red'
 },
  text:{
    textTransform: "uppercase",  
    color: 'white', fontSize: 14, fontWeight: "bold" 
  }
});

export default ItemList