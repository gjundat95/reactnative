/**
 * Created by jundat95 on 17/06/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,

} from 'react-native';

export default class Detail extends Component{
    render(){
        const navigation = this.props.navigation;
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Detail View</Text>
                <TouchableOpacity
                    style={{backgroundColor: 'green'}}
                    onPress={()=>{ this.props.navigation.goBack() }}
                >
                    <Text>Goto Back</Text>
                </TouchableOpacity>
                <Text>{navigation.state.params.name}</Text>
            </View>
        );
    }
}