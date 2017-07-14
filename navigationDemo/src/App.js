/**
 * Created by jundat95 on 17/06/2017.
 */

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HomeStack, TabBar, SideMenu } from './Router.js';
import Detail from './screen/Detail';

export const RootApp = StackNavigator({
    Side: {
        screen: SideMenu,
    },
    Detail: {
        screen: Detail,
    },
});

export default class App extends Component {

    render(){

        return(
            <RootApp/>
        );
    }
}
