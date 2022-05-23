import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'

import ProcessContainer from '../components/ProcessContainer'

const Solver = ({numProc, quantum}) => {


    
    let processes = []
    let procQueue = []
    let content = []
    let process = 1;
    let done = false

    console.log('process', process)

    for (var i = 0; i < numProc; i++) {
        processes.push(<ProcessContainer key={i + 10}>{content}</ProcessContainer>)
    }

    do {
        content.push(
            <Text key={process} style={styles.process}>Proceso {i}</Text>
        )
        if(process === 4) {
            done = true
            console.log('Aki')
        }
        process++
    } while(!done)
  
  return (
      <View style={styles.screen}>
          {processes}
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