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
      flex: 1,
      alignItems: 'center',
    },
  });