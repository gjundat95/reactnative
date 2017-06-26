/**
 * Created by jundat95 on 18/06/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,

} from 'react-native';

export default class FlatListScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: [],
            refresh: false
        }
    }

    refresh(){
        this.setState({refresh: true});
        fetch("http://10.11.7.55/demo/index.php")
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    data: responseJson
                });
            })
            .catch((e)=>{console.log(e)});
        this.setState({refresh: false});
    }

    render(){
        return(
            <FlatList

                refreshing={this.state.refresh}
                onRefresh={()=>{this.refresh()}}

                data={this.state.data}
                renderItem={({item}) =>
                    <View style={styles.row}>
                        <Text>{item.key}</Text>
                        <Text>{item.name}</Text>
                        <Image
                            style={{width: 200, height: 200}}
                            source={{uri: item.image }}
                        />
                        <Text>{item.description}</Text>
                    </View>
                }

                //horizontal= {false}
                //numColumns= {3}
            />
        );
    }

    componentDidMount(){
        fetch("http://192.168.0.103/demo/index.php")
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    data: responseJson
                });
            })
            .catch((e)=>{console.log(e)});
    }

}

var styles =  StyleSheet.create({
    row:{
        borderBottomWidth:1,
        borderRightWidth: 1,
        padding: 30,
    }
});