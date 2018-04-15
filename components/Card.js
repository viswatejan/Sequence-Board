import React from 'react';
import { Image, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import ImageAssets from '../core/ImageAssets';

const players = ['BLUE', 'GREEN'];

export default class Card extends React.Component {
    static currentPlayer = 0;

    constructor(props) {
        super(props);
        this.state = {
            card: null
        };
        this._onCardPress = this._onCardPress.bind(this);
        this._onCardLongPress = this._onCardLongPress.bind(this);
    }

    componentDidMount() {
        const { card } = this.props;
        this.setState({ card });
    }

    changePlayer() {
        Card.currentPlayer = Math.abs(Card.currentPlayer - 1);
    }

    toggleChip(remove){
        if(this.state.card.type === 'BACK'){
            return;
        }
        let { card } = this.state;
        card.player = remove ? null : players[Card.currentPlayer];
        this.setState({ card });
        this.changePlayer();
    }

    _onCardPress() {
        this.toggleChip();
    }

    _onCardLongPress() {
        this.toggleChip(true);
    }

    render() {
        _chip = null;
        _card = null;

        if (this.state.card) {
            if (this.state.card.player) {
                _chip = (<Image resizeMode="center" if style={styles.chip} source={ImageAssets.getSource(this.state.card.player)} />);
            }
            _card = (
                <ImageBackground resizeMode="contain" style={styles.card} source={ImageAssets.getSource(this.state.card.type)}>
                    {_chip}
                </ImageBackground>);
        }
        return (
            <View style={styles.cardHolder}>
                <TouchableOpacity onPress={this._onCardPress} onLongPress={this._onCardLongPress}>
                    {_card}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardHolder: {
        flex: 1
    },
    card: {
        width: '100%',
        height: '90%'
    },
    chip: {
        width: '50%',
        height: '50%',
        flex: 1,
        // alignSelf: 'center',
        alignItems: 'center'
    }
});
