/**
 * Created by jundat95 on 17/06/2017.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,

} from 'react-native';

export default class User extends Component{

    constructor(props){
        super(props);

        this.state = {
            text: 'hello'
        }
    }

    render(){
        return(
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>User View</Text>

                <TextInput
                    style={{ height: 50, width: 100, borderColor: 'blue', borderWidth: 2 }}
                    value={this.state.text}
                    onChangeText={(text)=> this.setState({text})}
                />

                <Text>{this.state.text}</Text>

                <Image
                    style={{width: 300, height: 300}}
                    source={require('../img/intellij.png')}
                />
                <Image
                    style={{minHeight: 300, minWidth: 200}}
                    source={{uri:'https://2.bp.blogspot.com/-N62TF7ib2UY/Va3MBfRwJDI/AAAAAAAAE-Q/80K-IUi_gFkqXLeQWBAEbk2l-_J_oAxHACPcBGAYYCw/s1600/2015-beginning_html5_media_2nd_edition.jpg'}}
                />



            </View>
        </ScrollView>

        );
    }
}