import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import ImageAssets from '../core/ImageAssets';

const players = ['BLUE', 'GREEN'];

export default class Card extends React.Component {
    static currentPlayer  = 0;

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

    _onCardPress() {
        let { card } = this.state;
        card.player = players[Card.currentPlayer]; 
        this.setState({ card });
        this.changePlayer();
    }

    _onCardLongPress(){
        let { card } = this.state;
        card.player = null; 
        this.setState({ card });
        this.changePlayer();
    }

    render() {
        _chip = null;
        _card = null;

        if (this.state.card) {
            _card = <Image resizeMode="contain" style={styles.card} source={ImageAssets.getSource(this.state.card.type)} />;
            if (this.state.card.player) {
                _chip = (<Image resizeMode="center" if style={styles.chip} source={ImageAssets.getSource(this.state.card.player)} />);
            }
        }
        return (
            <View style={styles.cardHolder}>
                <TouchableOpacity onPress={this._onCardPress} onLongPress={this._onCardLongPress}>
                    {_card}
                    {_chip}
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
        width: '95%',
        height: '100%'
    },
    chip: {
        width: '35%',
        height: '35%',
        position: 'absolute',
        top: '50%',
        left: '30%'
    }
});
