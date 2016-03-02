'use strict';

import React from 'react-native';

import Styles from '../styles/Styles';

import LoginComponent from './LoginComponent';

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
    } = React;

class SettingsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.onLogoutPress = this.onLogoutPress.bind(this);
    }

    onLogoutPress() {
        this.props.navigator.replace({
            name: "Login",
            component: LoginComponent,
            passPros: {navigator: this.props.navigator}
        });
    }

    render() {
        return <View style={Styles.container}>
            <Text>
                SettingsComponent
            </Text>
            <TouchableHighlight onPress={this.onLogoutPress}>
                <Text>Click to log out</Text>
            </TouchableHighlight>
        </View>;
    }
}

export default SettingsComponent;