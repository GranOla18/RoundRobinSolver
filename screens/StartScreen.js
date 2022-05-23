import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Button, Modal, SafeAreaView } from 'react-native'
import SetValueContainer from '../components/SetValueContainer'
import ShowValuesContainer from '../components/ShowValuesContainer'

const StartScreen = ({onSolve}) => {
    const [processes, setProcesses] = useState(0)
    const [quantum, setQuantum] = useState(1)

    const [procStart, setProcStart] = useState([])
    const [procDuration, setProcDuration] = useState([])
    const [valueSetterContainers, setValueSetterContainers] = useState([])

    const [values, setValues] = useState(undefined)
    const [modalVisible, setModalVisible] = useState(false);

    const addProcStart = (idx, start) => {
        procStart[idx] = start
    }

    const addProcDur = (idx, dur) => {
        procDuration[idx] = dur
    }

    const addProcess = () => {
        setProcesses(processes+1)
        console.log('processes', processes)
        setModalVisible(false)
        console.log('modalVisible', modalVisible)

        valueSetterContainers.push(
            <SetValueContainer key={processes}>
                <Text>Proceso {processes + 1}</Text>
                <Text>Tiempo de entrada: {procStart[processes]}</Text>
                <Text>Duración del proceso: {procDuration[processes]}</Text>
            </SetValueContainer>
        );

        setValues(<ShowValuesContainer>{valueSetterContainers}</ShowValuesContainer>)
    }

    useEffect(() => {
        console.log('procStart', procStart)
        console.log('procDuration', procDuration)
    }, [processes])

    console.log('processes', processes)
    console.log('quantum', quantum)
    

    return (
    <SafeAreaView>
        <View>
            <Text>Ingrese el valor del quantum en ticks: </Text>
            <TextInput
                placeholder='Quantum en ticks'
                onChangeText={q => setQuantum(q)}
            />
        </View>

        {values}

        <Modal
            transparent={false}
            visible={modalVisible}
            animationType={'slide'}
        >
            <SafeAreaView>
                <SetValueContainer>
                    <Text>Proceso {processes + 1}</Text>
                    <Text>Tiempo de entrada del proceso</Text>
                    <TextInput
                        placeholder='Tiempo de entrada'
                        onChangeText={procStrt => addProcStart(processes, procStrt)}
                    />
                    <Text>Duración del proces</Text>
                    <TextInput
                        placeholder='Duración del proceso'
                        onChangeText={procDur => addProcDur(processes, procDur)}
                    />
                    <Button
                        title='Establecer proceso'
                        onPress={() => addProcess()}
                    />
                </SetValueContainer>
            </SafeAreaView>
        </Modal>

        <Button
            title='Añadir proceso'
            onPress={() => setModalVisible(true)}
        />

        <Button
            title='Resolver'
            onPress={ () => onSolve(processes, quantum, 1) }
        />

    </SafeAreaView>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    screen: {

    },
    modalContainer: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    valueContainer: {
        backgroundColor: 'blue'
    }
});