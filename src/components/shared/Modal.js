import React from 'react';
import { StyleSheet, View, TextInput, Text, Alert } from 'react-native';
// component
import AppButton from './AppButton';
// tools
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
// redux
import { selectCartItems } from '../../redux/reducer/cartReducer';
import { selectUserBalance } from '../../redux/reducer/userReducer';
import { addToReceipt, updateBalance } from '../../redux/action/userAction';
import { clearItems } from '../../redux/action/cartAction';

const Modal = ({ showModalHandler }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isBalanceHigher, setIsBalanceHigher] = React.useState(true);
  const cartItems = useSelector(selectCartItems);
  const userBalance = useSelector(selectUserBalance)
  
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  let datePurchased = `${date}/${month}/${year}`;
  
  let totalPerItems = 0, totalAmount = 0;
  let cart_replica = [];

  cartItems.forEach((item) => {
    totalPerItems = item.itemQuantity * item.productPrice;
    totalAmount += totalPerItems;

    cart_replica.push({
      id: item.id,
      itemQuantity: item.itemQuantity,
      productName: item.productName,
      productPrice: item.productPrice,
      date: datePurchased
    });

  });
  
  React.useEffect(() => {
    if(userBalance >= totalAmount){
      setIsBalanceHigher(true);
    } else {
      setIsBalanceHigher(false)
    }
    if(cartItems.length === 0){
      cart_replica = [];
    }
  }, [userBalance, cartItems, totalAmount]);

  function submitHandler(){
    dispatch(updateBalance(totalAmount));
    dispatch(addToReceipt(...cart_replica));
    dispatch(clearItems());
    showModalHandler();
    navigation.navigate('Receipt');
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.formContainer}>
        {!isBalanceHigher && <Text style={styles.alertStyle}>Not enough balance!</Text>}
        {isBalanceHigher && <View style={styles.pushDownContainer}></View>}
        <View style={styles.buttonContainer}>
          <AppButton 
            title='X' 
            buttonStyle={styles.buttonStyle} 
            textStyle={styles.textStyle}
            onPress={showModalHandler}
          />
        </View>
        <View style={styles.formStyle}>
          <TextInput style={styles.textInputStyle} placeholder="Credit Card" />
          <TextInput style={styles.textInputStyle} placeholder="Street" />
          <TextInput style={styles.textInputStyle} placeholder="Expiring Date" />
          <TextInput style={styles.textInputStyle} placeholder="CCV Code" />
        </View>
        <View style={styles.transactionContainer}>
          <View style={styles.balanceContainer}>
            <Text>Balance:</Text>
            <Text style={styles.balance}> {userBalance}</Text>
          </View>
          <Text style={styles.totalPriceStyle}>Total Price: {totalAmount}</Text>
          <Text style={styles.totalStyle}>{userBalance - totalAmount}</Text>
        </View>
        <AppButton 
          title='Submit' 
          buttonStyle={submitStyle.button} 
          disabledButtonStyle={submitStyle.disabledStyle} 
          buttonState={!isBalanceHigher && true}
          onPress={() => submitHandler()}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    width: '100%', height: "100%",
    top: 0, bottom: 0, right: 0, left: 0,
    marginHorizontal: 0, marginVertical: 'auto',
    zIndex:100, backgroundColor: 'rgba(0, 0, 0, 0.5);',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer:{
    width: 300, height: 400, 
    backgroundColor: 'white', 
    position: 'relative', zIndex: 200
  },
  formStyle: {
    padding: 10
  },
  buttonContainer: {
    width: 25, position: 'absolute', right: 5, top: 5,
    textAlign: 'center'
  },
  buttonStyle:{
    backgroundColor: 'white',
  },
  textStyle:{
    color: 'black',
    fontSize: 20, textAlign: 'center'
  },
  textInputStyle:{
    borderWidth: 1, borderColor: '#ccc', marginBottom: 5, height: 45
  },
  transactionContainer:{
    paddingLeft: 10
  },
  balanceContainer:{
    flexDirection: 'row'
  },
  balance:{
    marginLeft: 16
  },
  totalPriceStyle:{
    borderBottomWidth: 1, borderBottomColor: '#ccc',
    paddingBottom: 5
  },
  totalStyle: {
    marginLeft: 73
  },
  alertStyle:{
    width:200, alignSelf: 'center', textAlign: 'center', 
    marginTop: 10, color: 'red'
  },
  pushDownContainer:{
    marginTop: 30
  }
});

const submitStyle = StyleSheet.create({
  button:{
    width: 100, backgroundColor: 'black', 
    position: 'absolute', bottom: 15, right: 100,
    borderRadius: 100, padding: 6
  },
  disabledStyle:{
    width: 100, backgroundColor: '#cccccc', 
    position: 'absolute', bottom: 15, right: 100,
    borderRadius: 100, padding: 6
  }
})
export default Modal