import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../constants/colors';


const SetValueContainer = ({children, style}) => {
    return (
      <SafeAreaView style={[styles.valuesContainer, style]}>
          {children}
      </SafeAreaView>
    )
  }

export default SetValueContainer

const styles = StyleSheet.create({
  valuesContainer: {
    padding: '100%',
        margin: 10,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: Colors.secondary,
},
});