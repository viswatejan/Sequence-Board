import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';

export default class Row extends React.Component {
    render() {
        cards = this.props.cards.map(card => <Card key={card.id} card={card}/>);
        return (
            <View style={styles.row}>
                {cards}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
});
