'use strict';

import React from 'react-native';

import Styles from '../styles/Styles';

var {
    StyleSheet,
    Text,
    View
    } = React;

class LoginComponent extends React.Component {
    render() {
        return <View style={Styles.container}>
            <Text>
                LoginComponent
            </Text>
        </View>;
    }
}

module.exports = LoginComponent;