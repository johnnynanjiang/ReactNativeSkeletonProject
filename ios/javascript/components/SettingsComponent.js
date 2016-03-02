'use strict';

import React from 'react-native';

import Styles from '../styles/Styles';

var {
    StyleSheet,
    Text,
    View
    } = React;

class SettingsComponent extends React.Component {
    render() {
        return <View style={Styles.container}>
            <Text>
                SettingsComponent
            </Text>
        </View>;
    }
}

module.exports = SettingsComponent;