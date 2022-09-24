import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import AppButton from '../../shared/AppButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/action/ItemAction';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';

const AddForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [addThisItem, setAddThisItem] = React.useState({
    name         : '',
    imageURL     : '',
    description  : '',
    availableItem: '',
    price        : '',
  });

  const imageHandler = React.useCallback(async() => {
    try{
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullscreen',
        type: [DocumentPicker.types.images]
      });
      setAddThisItem(prevState => {
        return {
          ...prevState,
          imageURL: response[0].uri
        }
      });
    } catch(error) {
      console.log(error)

    }

  }, []);

  let bool_array = [];

  function isEmptyChecker(key){
    if(addThisItem[key] === ''){
      bool_array.push(true)
    } else {
      bool_array.push(false)
    }
  }

  Object.keys(addThisItem).forEach(key => {
    isEmptyChecker(key);
  });

  
  function areAllFalse(arr) {
    return arr.every(element => element === false);
  }

  const isEmpty = areAllFalse(bool_array);

  function submitHandler(){
    dispatch(addItem(addThisItem));
    navigation.goBack()
  }
  console.log(addThisItem)
  return (
    <View style={styles.formContainer}>
      <TextInput 
        style={styles.textInput}
        placeholder='Name' 
        value={addThisItem.name}
        onChangeText={(value) => setAddThisItem({...addThisItem, name: value.toString()})}
      />
      {/* <TextInput 
        style={styles.textInput}
        placeholder='Image' 
        value={addThisItem.imageURL}
        onChangeText={(value) => setAddThisItem({...addThisItem, imageURL: value})}
      /> */}

      <TextInput 
        style={styles.textInput}
        placeholder='Description' 
        value={addThisItem.description}
        onChangeText={(value) => setAddThisItem({...addThisItem, description: value})}
      />

      <TextInput 
        style={styles.textInput}
        placeholder='Available Item' 
        value={addThisItem.availableItem.toString()}
        onChangeText={(value) => setAddThisItem({...addThisItem, availableItem: value})}
      />

      <TextInput 
        style={styles.textInput}
        placeholder='Price' 
        value={addThisItem.price.toString()}
        onChangeText={(value) => setAddThisItem({...addThisItem, price: value})}
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
  exampleText:{
    color: "gray"
  }
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

export default AddForm