import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Modal = () => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.textStyle}>Modalsasdafsdfafdasdfadsfad</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    width: '100%', height: "100%",
    borderColor: 'red', borderWidth: 1,
    top: 0, bottom: 0, right: 0, left: 0,
    marginHorizontal: 0, marginVertical: 'auto',
    zIndex:100, backgroundColor: 'black', opacity: 0.5
  },
  textStyle: {
    color: 'white'
  }
});

export default Modal