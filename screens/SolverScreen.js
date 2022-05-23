import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'

import ProcessContainer from '../components/ProcessContainer'
import Solver from '../Solver'

const SolverScreen = ({ended}) => {

    const [procVal, setProcVal] = useState([])
    const [values, setValues] = useState([])

    let content =[]
    let processes = []
    let process = 1;
    let done = false
    let idx = 0

    console.log('ended.length', ended.length)
    console.log('ended', ended)

    ended.forEach(element => {
        procVal.push(element.result)
    });

    console.log('procVal.length', procVal.length)
    console.log('procVal[0].length', procVal[0].length)

    let band = -1
    let showVals = []

    for(var i = 0; i<procVal.length; i++){
        content = []
        showVals = []
        for(var j = 0; j<procVal[i].length; j++) {
            if(procVal[i][j] == 0) {
                showVals.push((<Text key={process} style={styles.waiting}>Proceso</Text>))
            }
            else if (procVal[i][j] == 1){
                showVals.push((<Text key={process} style={styles.processing}>Proceso</Text>))
            }
            else if(procVal[i][j] == 2) {
                showVals.push((<Text key={process} style={styles.nothing}>Proceso</Text>))
            }
            values.push(procVal[i][j])
        }

        showVals.forEach(element => {
            content.push(element)
        });
        console.log('aki')

        processes.push(<ProcessContainer key={i + 10}>{content}</ProcessContainer>)
        
        values.push(3)
    }
    
    console.log('procVal', procVal)
    console.log('values', values)

    console.log('content', content)

    let aux 

  
  return (
      <View style={styles.screen}>
          {processes}
      </View>
      
    )
}

export default SolverScreen

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
    },
    processing: {
        backgroundColor: 'red',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    waiting: {
        backgroundColor: 'grey',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    nothing: {
        backgroundColor: 'blue',
        color: 'blue',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
    }
});