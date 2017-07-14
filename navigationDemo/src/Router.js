/**
 * Created by jundat95 on 17/06/2017.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
} from 'react-navigation';

import HomeScreen from './screen/Home.js';
import UserScreen from './screen/User.js';
import DetailScreen from './screen/Detail.js';
import MenuScreen from './screen/Menu.js';
import FlatListScreen from './screen/FlatList.js';

export const HomeStack = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions:{
            title: 'Home',

        }
    },
    // Detail: {
    //     screen: DetailScreen,
    //     navigationOptions: {
    //         title: 'Detail'
    //     }
    // },

});

export const UserStack = StackNavigator({
    User: {
        screen: UserScreen,
        navigationOptions:{
            title: 'User'
        }
    },
});


export const FlatListStack = StackNavigator({
    Flat:{
        screen: FlatListScreen,
        navigationOptions:{
            title: 'FlatList'
        }
    }
});

export const TabBar = TabNavigator({
    Home:{
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Trang Chu',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('./img/twitter.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            header: null,

        }
    },
    User:{
        screen: UserStack,
        navigationOptions: {
            tabBarLabel: 'Tai Khoan',
            tabBarIcon:({ tintColor }) => (
                <Image
                    source={require('./img/face.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            header: null,
        }
    },
    FlatList:{
        screen: FlatListStack,
        navigationOptions: {
            tabBarLabel: 'FlatList',
            tabBarIcon:({ tintColor }) => (
                <Image
                    source={require('./img/face.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
            header: null,s
        }
    }

},{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style:{
            backgroundColor:'#dddd'
        },
        activeTintColor: 'red',
        inactiveTintColor: 'green',
        showIcon: true,
    },
    swipeEnabled: true,
});

export const SideMenu = DrawerNavigator(
    {
        TabBar:{
            screen: TabBar,

        },

    },
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <MenuScreen {...props} />
    }

);

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
});