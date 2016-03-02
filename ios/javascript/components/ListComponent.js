'use strict';

import React from 'react-native';

import Styles from '../styles/Styles';

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
    } = React;

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={Styles.container}>
            <Text>
                ListComponent
            </Text>
        </View>;
    }
}

module.exports = ListComponent;