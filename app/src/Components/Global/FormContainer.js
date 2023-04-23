import {  Dimensions,
  KeyboardAvoidingView} from 'react-native'
import React from 'react'

export const FormContainer = ({children}) => {
  return (
    <KeyboardAvoidingView
    enabled
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    style={{height: Dimensions.get('window').height,
    paddingHorizontal:4,
    backgroundColor:"#333333"}}
  >
    {children}
  </KeyboardAvoidingView>
  )
}

