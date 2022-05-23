import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, TextInput, Text, Button, Modal } from 'react-native'

const StartScreen = ({onSolve}) => {
    const [processes, setProcesses] = useState(1)
    const [quatntum, setQuatntum] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);
    
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
        </View>
        

        <Modal
            transparent={false}
            visible={modalVisible}
            animationType={'slide'}
        >
            <View style={styles.modalContainer}>
                <TextInput
                    placeholder='Tiempo de entrada del proceso'
                />
                <TextInput
                    placeholder='Duración del proceso'
                />
            </View>
            <Button
                title='Editar Valores'
                onPress={ () => setModalVisible(false) }
            />
            <Button
                title='Resolver'
                onPress={ () => onSolve(processes, quatntum, 1) }
            />
        </Modal>

        <Button
            title='Añadir valores'
            onPress={() => setModalVisible(!modalVisible)}
        />

    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    modalContainer: {
        height: '50%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});