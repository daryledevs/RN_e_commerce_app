import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import AppButton from '../../shared/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllItems } from '../../../redux/reducer/itemReducer';
import { editItem } from '../../../redux/action/ItemAction';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';

const EditForm = ({ route }) => {
  const { itemId } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const itemData = useSelector(selectAllItems);
  const targetItem = itemData.find((item) => item.id === itemId);
  let bool_array = [];
  const [editThisItem, setEditThisItem] = React.useState({
    id           : targetItem.id,
    name         : targetItem.name,
    imageURL     : targetItem.imageURL,
    description  : targetItem.description,
    availableItem: targetItem.availableItem,
    price        : targetItem.price
  });
  
  const imageHandler = React.useCallback(async() => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [DocumentPicker.types.images]
      })

      setEditThisItem(prevState => {
        return {
          ...prevState,
          imageURL: response[0].uri
        }
      })
    } catch (error) {
      console.log(error)
    }
  })

  function isEmptyChecker(key){
    if(editThisItem[key] === '' || isNaN(editThisItem['availableItem']) === true || isNaN(editThisItem['price']) === true){
      bool_array.push(true)
    } else {
      bool_array.push(false)
    }
  }

  Object.keys(editThisItem).forEach(key => {
    isEmptyChecker(key);
  });


  function areAllFalse(arr) {
    return arr.every(element => element === false);
  }

  const isEmpty = areAllFalse(bool_array);

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
        placeholder='Description' 
        value={editThisItem.description}
        onChangeText={(value) => setEditThisItem({...editThisItem, description: value})}
      />
      <TextInput 
        style={styles.textInput}
        placeholder='Available Item' 
        value={isNaN(editThisItem.availableItem) ? '' : editThisItem.availableItem.toString()}
        onChangeText={(value) => setEditThisItem({...editThisItem, availableItem: parseInt(value)})}
      />
      <TextInput 
        style={styles.textInput}
        placeholder='Price' 
        value={isNaN(editThisItem.price) ? '' : editThisItem.price.toString()}
        onChangeText={(value) => setEditThisItem({...editThisItem, price: parseInt(value)})}
      />

      <AppButton 
        title='Choose file'
        onPress={imageHandler}
        buttonStyle={buttonStyle.button}
      />

      <AppButton 
        title="Submit" 
        onPress={submitHandler}
        buttonState={!isEmpty}
      />
      
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
});

const buttonStyle = StyleSheet.create({
  button:{
    backgroundColor: 'blue',
    width: 130,
    height: 40,
    justifyContent: 'center',
    marginVertical: 10
  },
});


export default EditForm