import React from 'react'
import { StyleSheet, View } from 'react-native'

const showValuesContainer = ({children}) => {
  return (
    <View>{children}</View>
  )
}

export default showValuesContainer

const styles = StyleSheet.create({
    screen: {

    },
    modalContainer: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    valueContainer: {
        backgroundColor: 'blue'
    }
});