import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StartScreen from './screens/StartScreen';
import Solver from './screens/Solver';

export default function App() {

  const [appState, setAppState] = useState(0);
  const [content, setContent] = useState(<StartScreen onSolve={setAppState}/>)
  const [numProc, setNumProc] = useState(undefined)
  const [quamtum, setQuamtum] = useState(undefined)

  console.log('appState', appState)

  const onSetValues = (qProc, quant, state) => {
    setNumProc(qProc)
    setQuamtum(quant)
    setAppState(state)
  }

  useEffect(() => {
    console.log('cola1')
    if(appState === 0){
      setContent(<StartScreen onSolve={onSetValues}/>)
    }
    else if (appState === 1){
      console.log('aki')
      setContent(<Solver numProc={numProc} quantum={quantum} />)
    }
  }, [appState])
  

  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
