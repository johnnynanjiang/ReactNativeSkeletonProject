'use strict';

var React = require('react-native')

import Styles from './ios/javascript/styles/Styles'
import HomeComponent from './ios/javascript/components/HomeComponent'

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var customStyles = StyleSheet.create(
    {
        welcome: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
        },
    });

class ReactNativeSkeletonProject extends React.Component {
    render() {
        return <HomeComponent/>;
    }
}

AppRegistry.registerComponent('ReactNativeSkeletonProject', () => ReactNativeSkeletonProject);
