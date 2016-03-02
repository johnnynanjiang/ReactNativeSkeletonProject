'use strict';

import React from 'react-native';

import Styles from '../styles/Styles';

import HomeComponent from './HomeComponent';
import SettingsComponent from './SettingsComponent';

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
    } = React;

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.onLoginPress = this.onLoginPress.bind(this);
    }

    onLoginPress() {
        this.props.navigator.push({
            navigationBarHidden: false, //ToDo: navigation bar is not showing up
            name: "Settings",
            component: HomeComponent,
            passPros: {navigator: this.props.navigator}
        });
    }

    render() {
        return <View style={Styles.container}>
            <Text>
                LoginComponent
            </Text>
            <TouchableHighlight onPress={this.onLoginPress}>
                <Text>Click to log in</Text>
            </TouchableHighlight>
        </View>;
    }
}

export default LoginComponent;