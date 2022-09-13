import { View, Text } from 'react-native'
import React from 'react'
import ReceiptList from '../components/Receipt/ReceiptList'
import { useNavigation } from '@react-navigation/native'
const Receipt = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true
    });
  })
  return (
    <View>
      <ReceiptList />
    </View>
  )
}

export default Receipt