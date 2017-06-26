/**
 * Created by jundat95 on 17/06/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert

} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        const navigation = this.props.navigation;
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home View</Text>
                <TouchableOpacity
                    style={{backgroundColor: 'green'}}
                    onPress={()=>{ navigation.navigate('Detail',{name: 'Tinh Ngo'}) }}
                >
                    <Text>Goto Detail</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{backgroundColor: 'red'}}
                    onPress={()=>{ this.props.navigation.navigate('DrawerOpen'); }}
                >
                    <Text>Goto Menu</Text>
                </TouchableOpacity>

            </View>
        );
    }
}