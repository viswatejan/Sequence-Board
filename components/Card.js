import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import CardAssets from '../core/CardAssets';

export default class Card extends React.Component {
    getSource(type) {
        return CardAssets[type].uri;
    }

    render() {
        chip = null;
        if (this.props.player) {
            chip = (<Image resizeMode="center" if style={styles.chip} source={this.getSource(this.props.player)} />);
        }
        return (
            <View style={styles.cardHolder}>
                <Image resizeMode="stretch" style={styles.card} source={this.getSource(this.props.type)} />
                {chip}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardHolder: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2
    },
    card: {
        width: '100%',
        height: '100%'
    },
    chip: {
        width: '50%',
        height: '50%',
        position: 'absolute',
        top: '25%',
        left: '25%'
    }
});
