import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Colors from '../constants/colors';


const ShowColorCode = ({children, style}) => {
    return (
      <SafeAreaView style={[styles.colorsCont, style]}>
          {children}
      </SafeAreaView>
    )
  }

export default ShowColorCode;

const styles = StyleSheet.create({
  colorsCont: {
    padding: 20,
        marginBottom: 5,
        marginTop:10,
        marginLeft:10,
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        textAlignVertical:'center',
        textAlign:'center'
},
});