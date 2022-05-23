import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';

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
      padding: 30,
      backgroundColor: Colors.secondary,
      alignItems: 'center',
      justifyCOntent: 'center'
    },
    headerTitle: {
      color: Colors.primary,
      fontSize: 40
    }
  });
  