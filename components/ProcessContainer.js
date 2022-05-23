import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/colors';

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
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
    },
});