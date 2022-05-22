import React from 'react'
import { StyleSheet, View } from 'react-native'

const ProcessContainer = ({children}) => {
  return (
    <View style={styles.processContainer}>
        {children}
    </View>
  )
}

export default ProcessContainer

const styles = StyleSheet.create({
    processContainer: {
        padding: 20,
        margin: 10,
        flexDirection: 'row',
        backgroundColor: 'blue',
        alignItems: 'center',
    },
});