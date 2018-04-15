import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ImageAssets from '../core/ImageAssets';

export default class Card extends React.Component {
    getSource(type) {
        return ImageAssets[type].uri;
    }

    render() {
        chip = null;
        if (this.props.card.player) {
            chip = (<Image resizeMode="center" if style={styles.chip} source={this.getSource(this.props.card.player)} />);
        }
        return (
            <View style={styles.cardHolder}>
                <Image resizeMode="contain" style={styles.card} source={this.getSource(this.props.card.type)} />
                {chip}
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
