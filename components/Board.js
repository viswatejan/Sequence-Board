import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from './Row';

const sequence = [
    ['RED_BACK', '6D', '7D', '8D', '9D', '10D', 'QD', 'KD', 'AD', 'BLUE_BACK'],
    ['5D', '3H', '2H', '2S', '3S', '4S', '5S', '6S', '7S', 'AS'],
    ['4D', '4H', 'KD', 'AD', 'AC', 'KC', 'QC', '10C', '8S', 'KC'],
    ['3D', '5H', 'QD', 'QH', '10H', '9H', '8H', '9C', '9S', 'QC'],
    ['2D', '6H', '10D', 'KH', '3H', '2H', '7H', '8C', '10S', '10C'],
    ['AS', '7H', '9D', 'AH', '4H', '5H', '6H', '7C', 'QS', '9C'],
    ['KS', '8H', '8D', '2C', '3C', '4C', '5C', '6C', 'KS', '8C'],
    ['QS', '9H', '7D', '6D', '5D', '4D', '3D', '2D', 'AS', '7C'],
    ['10S', '10H', 'QH', 'KH', 'AH', '2C', '3C', '4C', '5C', '6C'],
    ['BLUE_BACK', '9S', '8S', '7S', '6S', '5S', '4S', '3S', '2S', 'RED_BACK']
];

export default class Board extends React.Component {
    render() {
        rows = sequence.map((row) => <Row key={row[0]} cards={row}></Row>);
        return (
            <View style={styles.board}>
                {rows}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
});
