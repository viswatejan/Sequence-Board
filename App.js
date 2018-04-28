import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Board from './components/Board';
import store from './core/sequenceStore';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState())
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SEQUENCE</Text>
        </View>
        <View style={styles.boardContainer}>
          <Board cardsSequence={this.state.cardsSequence} player={this.state.player}></Board>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#775e67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexBasis: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    fontSize: 24,
    color: '#ccc',
    marginLeft: 10,
    marginRight: 10 
  },
  boardContainer: {
    flexBasis: '90%',
    width: '100%'
  }
});
