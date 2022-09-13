import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserReceipt } from '../../../../redux/reducer/userReducer';
const ReceiptItem = () => {
  const receipt = useSelector(selectUserReceipt);
  console.log(receipt)
  return (
    <>
      {
        receipt.map((item) => (
          <View style={styles.receiptItemContainer} key={item.id}>
            <Text style={styles.textStyle}>{item.productName}</Text>
            <Text style={styles.textStyle}>{item.productPrice}</Text>
            <Text style={styles.textStyle}>{item.itemQuantity}</Text>
            <Text style={styles.textStyle}>{item.date}</Text>
          </View>
        ))
      }
    </>
  )
}

const styles = StyleSheet.create({
  receiptItemContainer:{
    flexDirection: 'row', justifyContent: 'space-between'
  },
  textStyle: {
    borderWidth: 1, textAlign: 'center',
    flex: 1
  },
});

export default ReceiptItem;