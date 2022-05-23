import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Button, Modal, SafeAreaView } from 'react-native'

import ProcessContainer from '../components/ProcessContainer'
import Colors from '../constants/colors';
import SetValueContainer from '../components/SetValueContainer';
import ShowValuesContainer from '../components/ShowValuesContainer';


const SolverScreen = ({numProc, quantum, starts, durations, ended, restart}) => {

    const [procVal, setProcVal] = useState([])
    const [values, setValues] = useState([])
    const [visible, setVisible] = useState(false)
    const [waitTime, setWaitTime] = useState([])

    let shower
    let content =[]
    let wait
    let processes = []
    let finalTime = []
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

    let showVals = []

    for(var i = 0; i<procVal.length; i++){
        content = []
        showVals = []
        wait = 0
        for(var j = 0; j<procVal[i].length; j++) {
            if(procVal[i][j] == 0) {
                showVals.push((<Text key={process} style={styles.waiting}>Proceso</Text>))
                wait++
                console.log('waitTime[i]', waitTime[i])
            }
            else if (procVal[i][j] == 1){
                showVals.push((<Text key={process} style={styles.processing}>Proceso</Text>))
            }
            else if(procVal[i][j] == 2) {
                showVals.push((<Text key={process} style={styles.nothing}>Proceso</Text>))
            }
            values.push(procVal[i][j])
        }

        waitTime[i] = wait
        finalTime[i] = waitTime[i] + durations[i]
        showVals.forEach(element => {
            content.push(element)
        });
        console.log('aki')

        processes.push(<Text style={styles.processName}>Proceso {i + 1}</Text>)
        processes.push(<ProcessContainer key={i + 10}>{content}</ProcessContainer>)
        
        values.push(3)
    }
    
    console.log('procVal', procVal)
    console.log('values', values)

    console.log('content', content)

    let show = []

    for(var i = 0; i < numProc; i++) {
        show.push(
            <SetValueContainer key={i} style={styles.show}>
                <Text style={styles.showProcess}>Proceso {i + 1}</Text>
                <Text style={styles.showInfo}>Tiempo de entrada: {starts[i]}</Text>
                <Text style={styles.showInfo}>Duración del proceso: {durations[i]}</Text>
                <Text style={styles.showInfo}>Tiempo en espera: {waitTime[i]}</Text>
                <Text style={styles.showInfo}>Tiempo de Finalización: {finalTime[i]}</Text>
            </SetValueContainer>
        );
    }
    
    shower = (<ShowValuesContainer style={styles.processesData}>{show}</ShowValuesContainer>)

    

  return (
      <SafeAreaView style={styles.screen}>
          {processes}
          
          {shower}
            
          <Text style={styles.buttonContainer}>
            <Button
                title='Generar nuevo'
                color={Colors.quinary}
                onPress={() => restart()}
            />
          </Text>
      </SafeAreaView>
      
    )
}

export default SolverScreen

const styles = StyleSheet.create({
    screen: {
      flex: 1,
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
        backgroundColor: Colors.quinary,
        color: Colors.quinary,
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    waiting: {
        backgroundColor: Colors.quaternary,
        color: Colors.quaternary,
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    nothing: {
        backgroundColor: Colors.secondary,
        color: Colors.secondary,
        flex: 1,
        padding: 10,
    },
    processName: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        color: Colors.primary
    },
    buttonContainer: {
        margin: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    show: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },  
    showProcess: {
        fontSize: 20,
        color: Colors.primary,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    showInfo: {
        fontSize: 15,
        marginBottom: 10,
        marginHorizontal: 15,
    },
    processesData: {
        flex:1,
        flexDirection: 'row',
        marginTop: 15,
    }
});