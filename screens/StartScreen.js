import React from 'react'
import { useState } from 'react'
import { View, TextInput, Text, Button } from 'react-native'


const StartScreen = ({onSolve}) => {
    const [processes, setProcesses] = useState(1)
    const [quatntum, setQuatntum] = useState(1)

    console.log('processes', processes)
    
    const onChangeProcesses = (numProc) => {
        if(!numProc){
            return 0
        }
        setProcesses(parseInt(numProc));
        console.log('numProc', numProc)
    }

    const onChangeQuantum = (numQ) => {
        setQuatntum(numQ)
        console.log('numQ', numQ)
    }

    return (
    <View>
        
        <Text>Ingrese la cantidad de procesos: </Text>
        <TextInput
            placeholder='Cantidad de Procesos'
            onChangeText={newText => onChangeProcesses(newText)}
        />

        <Text>Ingrese el valor del quantum en ticks: </Text>
        <TextInput
            placeholder='Quantum en ticks'
            onChangeText={q => onChangeQuantum(q)}
        />

        <Button
            title='Resolver'
            onPress={ () => onSolve(processes, quatntum, 1) }
        />
    </View>
  )
}

export default StartScreen