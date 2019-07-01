import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import {Provider} from 'react-redux';

import * as Theme from './styles/theme'
import {getStore} from "./store";
import NetworkBar from "./components/elements/network-bar";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            instructions : Platform.select({
                ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
                android:
                    'Double tap R on your keyboard to reload,\n' +
                    'Shake or press menu button for dev menu',
            }),
        }
    }

    render() {
        const {instructions} = this.state;
        const store = getStore();

        return (
            <Provider store={store}>

                <NetworkBar />

                <View style={Theme.styles.container}>
                    <Text style={Theme.styles.welcome}>Welcome to React Native!</Text>
                    <Text style={Theme.styles.instructions}>To get started, edit App.js</Text>
                    <Text style={Theme.styles.instructions}>{instructions}</Text>
                </View>
            </Provider>

        );
    }
}
