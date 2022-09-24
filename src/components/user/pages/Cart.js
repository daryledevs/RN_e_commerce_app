import React from 'react';
import { StyleSheet, View, Text, ScrollView, Modal } from 'react-native';
// components
import AppButton from '../../shared/AppButton';
import CartList from '../components/Cart/CartList';
import CustomModal from '../components/Cart/CartPaymentModal';
// redux
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/reducer/cartReducer';
// tool
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const [showModal, setShowModal] = React.useState(false);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const [isButtonNull, setIsButtonNull] = React.useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true
    });
    if(cartItems.length === 0){
      setIsButtonNull(true)
    } else {
      setIsButtonNull(false);
    }
  }, [cartItems]);
  
  function showModalHandler(){
    setShowModal(!showModal);
  }

  return (
    <View style={styles.cartContainer}>
      <Modal 
        animationType="fade"
        transparent={true}
        visible={showModal}
      >
        {showModal? <CustomModal showModalHandler={showModalHandler} /> : null}
      </Modal>
      <View style={styles.cartTitleContainer}>
        <Text style={styles.textStyle}>Name</Text>
        <Text style={styles.textStyle}>Price</Text>
        <Text style={styles.textStyle}>Quantity</Text>
        <Text  style={styles.textStyle}>Remove</Text>
      </View>
      <ScrollView>
        <CartList/>
      </ScrollView>
      <View style={styles.placeOrderContainer}>
        <AppButton title='Place Order' onPress={showModalHandler} buttonState={isButtonNull && true}  />
      </View>
    </View>
  )
}
// buttonState={cartItems && true}

const styles = StyleSheet.create({
  cartContainer: {
    position: 'relative', height: '100%'
  },
  cartTitleContainer:{
    flexDirection: 'row', justifyContent: 'space-between'
  },
  textStyle: {
    borderWidth: 1, textAlign: 'center',
    flex: 1
  },
  placeOrderContainer:{
    position: 'absolute',
    bottom: 10, right: 10, zIndex: 2
  }
});

export default Cart