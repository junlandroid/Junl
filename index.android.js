/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Junl extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item,styles.center]}>
                    <Text>酒店</Text>
                </View>
                <View style={styles.item}>


                </View>
                <View style={styles.item}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,//边框
        borderColor: 'red',
        flexDirection: 'row',//方向
    },
    item: {
        flex: 1,
        height: 80,
        borderWidth: 1,
        borderColor: 'blue'
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
    }


});

AppRegistry.registerComponent('Junl', () => Junl);
