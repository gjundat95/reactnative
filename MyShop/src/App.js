/**
 * Created by jundat95 on 20/06/2017.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,


} from 'react-native';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            username : 'username',
            password: 'password',
            result: '',
            token: '',
        }
    }

    // func textInput
    _changeUserName=username=>this.setState({username});
    _changePassword=password=>this.setState({password});

    // func click
    _clickLogin=()=>{
        Alert.alert('alert','start');
        fetch('http://192.168.1.30/tinhngo/login.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then((response)=>response.json()).then((responseJson)=>{
            if(responseJson.error == 'false'){
                Alert.alert('error',responseJson.message);
            }else {
                Alert.alert('success','login success');
            }
        })
    };

    render(){
        return(
            <View style={styles.content}>
                <Text style={styles.textTop}>Login</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={this._changeUserName}
                    style={styles.textInput}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={this._changePassword}
                    style={styles.textInput}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this._clickLogin}
                >
                    <View style={styles.content}>
                        <Text style={{color: 'white'}}>Login</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    };
};

const styles = StyleSheet.create({
    content:{
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,
    },
    textTop:{
        color: 'green',

    },
    textInput:{
        width: 200,
        height: 44,
        padding: 5,

    },
    button:{
        width: 200,
        height: 44,
        padding: 5,
        backgroundColor: 'green',
        marginTop: 20,
    },

});
