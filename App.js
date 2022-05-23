import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import StartScreen from './screens/StartScreen';
import SolverScreen from './screens/SolverScreen';
import Solver from './Solver';
import Header from './components/Header';
import Colors from './constants/colors';

export default function App() {

  const [appState, setAppState] = useState(0);
  const [content, setContent] = useState(<StartScreen onSolve={setAppState}/>)
  const [numProc, setNumProc] = useState(undefined)
  const [quantum, setQuamtum] = useState(undefined)
  const [starts, setStarts] = useState([])
  const [durations, setDurations] = useState([])

  const onSetValues = (qProc, quant, starts, durations, state) => {
    setNumProc(qProc)
    setQuamtum(quant)
    setStarts(starts)
    setDurations(durations)
    setAppState(state)
  }

  useEffect(() => {
    if(appState === 0){
      setContent(<StartScreen onSolve={onSetValues}/>)
    }
    else if (appState === 1){
      setContent(<Solver numProc={numProc} quantum={quantum} starts={starts} durations={durations} />)
    }
  }, [appState])
  

  return (
    <View style={styles.container}>
      <Header title={'Solver de Round Robin'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tertiary
  },
});
