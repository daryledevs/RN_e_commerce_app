import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import AppButton from '../../shared/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllItems } from '../../../redux/reducer/itemReducer';
import { editItem } from '../../../redux/action/ItemAction';
import { useNavigation } from '@react-navigation/native';
const EditForm = ({ route }) => {
  const { itemId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const itemData = useSelector(selectAllItems);
  const targetItem = itemData.find((item) => item.id === itemId);
  
  const [editThisItem, setEditThisItem] = React.useState({
    id           : targetItem.id,
    name         : targetItem.name,
    imageURL     : targetItem.imageURL,
    description  : targetItem.description,
    availableItem: targetItem.availableItem,
    price        : targetItem.price
  });
  
  function submitHandler(){
    dispatch(editItem(editThisItem));
    navigation.goBack()
  }

  return (
    <View style={styles.formContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder='Name' 
        value={editThisItem.name}
        onChangeText={(value) => setEditThisItem({...editThisItem, name: value.toString()})}
      />
      <TextInput 
        style={styles.textInput}
        placeholder='Image' 
        value={editThisItem.imageURL}
      />
      <Text style={styles.exampleText}>For example: https://reactjs.org/logo-og.png</Text>
      <TextInput 
        style={styles.textInput}
        placeholder='Description' 
        value={editThisItem.description}
        onChangeText={(value) => setEditThisItem({...editThisItem, description: value})}
      />
      <TextInput 
        style={styles.textInput}
        placeholder='Available Item' 
        value={editThisItem.availableItem.toString()}
        onChangeText={(value) => setEditThisItem({...editThisItem, availableItem: parseInt(value)})}
      />
      <TextInput 
        style={styles.textInput}
        placeholder='Price' 
        value={editThisItem.price.toString()}
        onChangeText={(value) => setEditThisItem({...editThisItem, price: parseInt(value)})}
      />
      <AppButton title="Submit" onPress={submitHandler}/>
    </View>
  )
}
const styles = StyleSheet.create({
  formContainer:{
    padding: 5, justifyContent: 'center',
     height: '100%'
  }, 
  textInput: {
    borderWidth: 1, borderColor: '#ccc',
    marginVertical: 2
  },
  exampleText:{
    color: "gray"
  }
});

export default EditForm