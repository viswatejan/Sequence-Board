import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Board from './components/Board';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image resizeMode="stretch" style={styles.logo} source={require('./assets/images/cards/BLUE_BACK.png')} />
          <Text style={styles.title}>SEQUENCE</Text>
          <Image resizeMode="stretch" style={styles.logo} source={require('./assets/images/cards/RED_BACK.png')} />
        </View>
        <View style={styles.boardContainer}>
          <Board></Board>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexBasis: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 22,
    height: 24
  },
  title: {
    fontSize: 24,
    color: '#045A1C',
    marginLeft: 10,
    marginRight: 10 
  },
  boardContainer: {
    flexBasis: '96%',
    width: '100%'
  }
});
