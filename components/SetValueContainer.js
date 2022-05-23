import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

const SetValueContainer = ({children}) => {
    return (
      <SafeAreaView style={styles.processContainer}>
          {children}
      </SafeAreaView>
    )
  }

export default SetValueContainer

const styles = StyleSheet.create({
    processContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
});