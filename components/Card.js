import React from 'react';
import { Image, ImageBackground, View, StyleSheet, TouchableOpacity } from 'react-native';
import ImageAssets from '../core/ImageAssets';
import SoundAssets from '../core/SoundAssets';
import Sound from 'react-native-sound';
import store from '../core/sequenceStore';
import  { placeChip, removeChip } from '../core/Actions';

Sound.setCategory('Playback');

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this._onCardPress = this._onCardPress.bind(this);
        this._onCardLongPress = this._onCardLongPress.bind(this);
        this.placeSound = new Sound(SoundAssets.placeSound, SoundAssets.callback);
        this.removeSound = new Sound(SoundAssets.removeSound, SoundAssets.callback);
    }

    componentWillUnmount() {
        this.placeSound.release();
        this.removeSound.release();
    }

    _onCardPress() {
        if(this.props.card && this.props.card.type !== 'BACK' && !this.props.card.player){
            store.dispatch(placeChip(this.props.card))
            this.placeSound.play(); 
        }
    }

    _onCardLongPress() {
        if(this.props.card && this.props.card.type !== 'BACK' && this.props.card.player){
            store.dispatch(removeChip(this.props.card))
            this.removeSound.play();
        }
    }

    render() {
        _chip = null;
        _card = null;

        if (this.props.card) {
            if (this.props.card.player) {
                _chip = (<Image resizeMode="center" if style={styles.chip} source={ImageAssets.getSource(this.props.card.player)} />);
            }
            _card = (
                <ImageBackground resizeMode="contain" style={styles.card} source={ImageAssets.getSource(this.props.card.type)}>
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
        alignItems: 'center'
    }
});
