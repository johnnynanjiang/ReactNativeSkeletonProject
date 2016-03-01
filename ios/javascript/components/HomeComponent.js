'use strict';

import React from 'react-native'

import Styles from '../styles/Styles'

var {
    StyleSheet,
    Text,
    View
    } = React;

class HomeComponent extends React.Component {
    render() {
        return <View style={Styles.container}>
            <Text>
                HomeComponent
            </Text>
        </View>;
    }
}

module.exports = HomeComponent;