import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback  } from 'react-native';
import Row from './Row';
import CardModel from '../core/CardModel';
import ImageAssets from '../core/ImageAssets';
import SoundAssets from '../core/SoundAssets';
import Sound from 'react-native-sound';
import store from '../core/sequenceStore';
import  { changePlayer } from '../core/Actions';

Sound.setCategory('Playback');

export default class Board extends React.Component { 
    constructor(props) {
        super(props);
        this.selectSound = new Sound(SoundAssets.selectSound, SoundAssets.callback);
    }

    componentWillUnmount() {
        this.selectSound.release();
    }

    _playerChangedManually = () => {
        store.dispatch(changePlayer());
        this.selectSound.play();
    }

    render() {
        let rows = this.props.cardsSequence.map(row => 
            <Row key={row[0].id} cards={row} />
        );

        return (
            <View style={styles.board}>
                {rows}
                <View style={styles.playerStatus}>
                    <TouchableWithoutFeedback  onPress={this._playerChangedManually}>
                        <Image style={styles.chip} resizeMode="contain" source={ImageAssets.getSource(this.props.player)} />
                    </TouchableWithoutFeedback >
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    board: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    info: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    playerStatus: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    chip: {
        width: '10%',
        height: '100%',
        margin: 10,
    }
});
