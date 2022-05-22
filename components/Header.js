import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    );
  }
export default Header

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 120,
      padding: 40,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyCOntent: 'center'
    },
    headerTitle: {
      color: 'black',
      fontSize: 30
    }
  });
  