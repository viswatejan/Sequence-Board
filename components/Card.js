import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import CardAssets from '../core/CardAssets';

export default class Card extends React.Component {

    getSource(type) {
        return CardAssets[type].uri;
    }

    render() {
        return (
            <View style={styles.card}>
                <Image resizeMode="stretch" style={styles.img} source={this.getSource(this.props.type)}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 2,
    },
    img: {
        width: '100%',
        height: '100%'
    }
});
