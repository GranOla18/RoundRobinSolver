import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'

import ProcessContainer from '../components/ProcessContainer'

const Solver = ({numProc, quantum}) => {


    
    let processes = []
    
    for (var i = 0; i < numProc; i++) {
        processes.push(<Text style={styles.process}>Proceso {i}</Text>)
    }   
    
  
  return (
      <View style={styles.screen}>
          <ProcessContainer>
            {processes}
          </ProcessContainer>
          <ProcessContainer>
            {processes}
          </ProcessContainer>
      </View>
      
    )
}

export default Solver

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'flex-start',
    },
    process: {
        backgroundColor: 'red',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
    }
});