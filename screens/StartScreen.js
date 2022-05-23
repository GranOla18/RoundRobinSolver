import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Text, Button, Modal, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-web'
import SetValueContainer from '../components/SetValueContainer'
import ShowValuesContainer from '../components/ShowValuesContainer'
import Colors from '../constants/colors';

const StartScreen = ({onSolve}) => {
    const [processes, setProcesses] = useState(0)
    const [quantum, setQuantum] = useState(1)

    const [procStart, setProcStart] = useState([])
    const [procDuration, setProcDuration] = useState([])
    const [valueSetterContainers, setValueSetterContainers] = useState([])

    const [values, setValues] = useState(undefined)
    const [modalVisible, setModalVisible] = useState(false);

    const addProcStart = (idx, start) => {
        procStart[idx] = parseInt(start)
    }

    const addProcDur = (idx, dur) => {
        procDuration[idx] = parseInt(dur)
    }

    const addProcess = () => {
        setProcesses(processes+1)
        console.log('processes', processes)
        setModalVisible(false)
        console.log('modalVisible', modalVisible)

        valueSetterContainers.push(
            <SetValueContainer key={processes} style={styles.show}>
                <Text style={styles.showProcess}>Proceso {processes + 1}</Text>
                <Text style={styles.showInfo}>Tiempo de entrada: {procStart[processes]}</Text>
                <Text style={styles.showInfo}>Duración del proceso: {procDuration[processes]}</Text>
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
    <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
            <Text style={styles.quantumText}>Ingrese el valor del quantum en ticks: </Text>
            <TextInput
                style={styles.quantumText}
                placeholder='Quantum en ticks'
                onChangeText={q => setQuantum(q)}
            />
        </View>

        {values}

        <View style={styles.modalContainer}>
            <Modal
                transparent={false}
                visible={modalVisible}
                animationType={'slide'}
            >
                <SafeAreaView style={styles.modalContent}>
                    <SetValueContainer style={styles.input}>
                        <Text style={styles.processTitle}>Proceso {processes + 1}</Text>
                        <Text style={styles.processData}>Tiempo de entrada del proceso</Text>
                        <TextInput
                            style={styles.processDataVal}
                            placeholder='Tiempo de entrada'
                            onChangeText={procStrt => addProcStart(processes, procStrt)}
                        />
                        <Text style={styles.processData}>Duración del proces</Text>
                        <TextInput
                            style={styles.processDataVal}
                            placeholder='Duración del proceso'
                            onChangeText={procDur => addProcDur(processes, procDur)}
                        />
                    </SetValueContainer>
                    <Button
                        color={Colors.quinary}
                        title='Establecer proceso'
                        onPress={() => addProcess()}
                    />
                </SafeAreaView>
            </Modal>
        </View>
        
        <View style={styles.buttonContainer}>
            <Button
                style={styles.button}
                color={Colors.secondary}
                title='Añadir proceso'
                onPress={() => setModalVisible(true)}
            />
        </View>

        <Button
            color={Colors.quinary}
            title='Resolver'
            onPress={ () => onSolve(processes, quantum, procStart, procDuration, 1) }
        />

    </SafeAreaView>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },  
    container: {
        margin: 20,
        padding: 10,
        borderWidth: 2,
        backgroundColor: Colors.quaternary,
        borderColor: Colors.quinary,
        borderRadius: 10,
        alignItems: 'center',
    },
    quantumText: {
        fontSize: 17,
        margin: 5,
        textAlign: 'center'
    },
    buttonContainer: {
        margin: 10,
    },
    button:{
        backgroundColor: Colors.secondary,
        borderRadius: 1,
        width: '7%',
        height: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        transform: 'uppercase',
        fontSize: 10,
        color: Colors.tertiary
    },
    input: {
        backgroundColor: Colors.quaternary,
        width: '60%',
        padding: 100,
    },
    show: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },  
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    modalContent: {
        marginTop: '15%',
        width: '30%',
        height: '30%',
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.quaternary
    },
    processTitle: {
        fontSize: 25,
        color: Colors.quinary,
        fontWeight: 'bold',
        margin: 5,
    },
    processData: {
        fontSize: 15,
        margin: 5,
    },
    processDataVal: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 13,
    },
    valueContainer: {
        backgroundColor: 'blue'
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
    }
});