/**
 * Created by jundat95 on 17/06/2017.
 */

import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { HomeStack, TabBar, SideMenu } from './Router.js';

export default class App extends Component {

    render(){
        return(
            <SideMenu/>
        );
    }
}
