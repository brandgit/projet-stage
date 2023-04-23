import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export const FormSelect = () => {
  return (
    <RNPickerSelect
    onValueChange={(value) => console.log(value)}
    items={[
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
    ]}
/>
  )
}


const styles = StyleSheet.create({})