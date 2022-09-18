import { View, Text } from 'react-native'
import React from 'react'
import EditForm from '../Components/EditForm'
const EditPage = (props) => {
  
  return (
    <View>
      <EditForm {...props} />
    </View>
  )
}

export default EditPage