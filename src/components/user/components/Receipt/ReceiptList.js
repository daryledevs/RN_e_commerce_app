import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ReceiptItem from './ReceiptItem'
const ReceiptList = () => {
  return (
    <View>
      <View style={styles.receiptContainer}>
        <Text style={styles.textStyle}>Name</Text>
        <Text style={styles.textStyle}>Price</Text>
        <Text style={styles.textStyle}>Quantity</Text>
        <Text  style={styles.textStyle}>Date</Text>
      </View>
      <ReceiptItem />
    </View>
  )
}
const styles = StyleSheet.create({
  receiptContainer:{
    flexDirection: 'row', justifyContent: 'space-between'
  },
  textStyle: {
    borderWidth: 1, textAlign: 'center',
    flex: 1
  },
});

export default ReceiptList