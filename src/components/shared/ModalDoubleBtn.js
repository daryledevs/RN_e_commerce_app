import { View, Text, StyleSheet, Modal } from 'react-native';
import AppButton from './AppButton';
import React, { useState } from 'react'
import { useEffect } from 'react';

const ModalDoubleBtn = ({
  title,
  message,
  cancel,
  confirm,
  triggerModal
}) => {

  const WarningBox = () => (
    <View style={styles.ModalContainer}>
      <View style={styles.modal}>
        <View style={styles.messageContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textMessage}>{message}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton 
            title="cancel" 
            buttonStyle={buttonStyle.cancelButton} 
            textStyle={buttonStyle.buttonText}
            onPress={cancel}
          />
          <AppButton 
            title="Confirm" 
            buttonStyle={buttonStyle.confirmButton} 
            textStyle={buttonStyle.buttonText}
            onPress={confirm}
          />
        </View>
      </View>
    </View>
  )

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={triggerModal}
    >
      <WarningBox />
    </Modal>
  )
}

const styles = StyleSheet.create({
  ModalContainer:{
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center", zIndex: 99999,
    flex: 1
  },

  modal:{
    backgroundColor: "white",
    width: 300, height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: '6%',
  },

  messageContainer:{
    height: "60%",
  },

  textTitle:{
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold'
  },

  textMessage:{
    textAlign: 'center',
    fontSize: 16,
    flex: 1,
    padding: 5,
  },

  buttonContainer:{
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});

const buttonStyle = StyleSheet.create({
  confirmButton:{
    backgroundColor: "green",
    height: '100%',
    width: '45%',
    borderRadius: 30 ,
    justifyContent: 'center'
  },

  buttonText:{
    textTransform: 'capitalize',
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold', 
  },

  cancelButton:{
    backgroundColor: "red",
    height: '100%',
    width: '45%',
    borderRadius: 30 ,
    justifyContent: 'center'
  }

});

export default ModalDoubleBtn