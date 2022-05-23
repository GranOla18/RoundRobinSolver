import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import Colors from '../constants/colors';

const showValuesContainer = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.valuesContainer, style]}>{children}</SafeAreaView>
  )
}

export default showValuesContainer

const styles = StyleSheet.create({
    valuesContainer: {
    },
});