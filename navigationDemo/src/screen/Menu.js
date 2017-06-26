/**
 * Created by jundat95 on 17/06/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Menu extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Menu View</Text>
                <Text>xin chao ba con</Text>
                <Image
                    style={{ width: 50, height: 50}}
                    source={{uri:'https://facebook.github.io/react/img/logo_og.png'}}
                />
            </View>
        );
    }
}