import {  StyleSheet, TouchableOpacity, Text } from "react-native"
import React from 'react'

const AppButton = ({ onPress, title, buttonState, buttonStyle, disabledButtonStyle, textStyle }) => {
  return (
  <TouchableOpacity 
    onPress={onPress} 
    style={buttonState ? ( disabledButtonStyle ? disabledButtonStyle : styles.disabledStyle) : buttonStyle ? buttonStyle : styles.appButtonContainer} 
    activeOpacity={0.8} 
    disabled={buttonState}
  >
    <Text style={buttonState ? styles.disabledTextStyle: textStyle ? textStyle : styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  disabledStyle:{
    backgroundColor: '#cccccc',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
    
  },
  disabledTextStyle: {
    color: 'grey',
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
export default AppButton