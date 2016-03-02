'use strict';

var React = require('react-native');

import Styles from './ios/javascript/styles/Styles';
import HomeComponent from './ios/javascript/components/HomeComponent';
import LoginComponent from './ios/javascript/components/LoginComponent';

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
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
        return <Navigator
            initialRoute={{component: HomeComponent}}

            configureScene={() => {
                return Navigator.SceneConfigs.FloatFromRight;
            }}

            renderScene={(route, navigator) => {
                if (route.component) {
                    return React.createElement(route.component, { navigator });
                }
            }}
        />;
    }
}

AppRegistry.registerComponent('ReactNativeSkeletonProject', () => ReactNativeSkeletonProject);
