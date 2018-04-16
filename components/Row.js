import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Card from './Card';

export default class Row extends React.Component {

    _playerChanged = () => {
        this.props.playerChanged();
    };

    render() {
        cards = this.props.cards.map((card) => <Card key={card.id} card={card} player={this.props.player} playerChanged={this._playerChanged}></Card>);
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
