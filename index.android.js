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
    Navigator,
} = React;

var ReactNativeSkeletonProject = React.createClass({
    render() {
        return <Navigator
            navigationBarHidden={false}

            initialRoute={
                {
                    name: "Login",
                    component: LoginComponent,
                    backButtonTitle: "back"
                }
            }

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
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
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

AppRegistry.registerComponent('ReactNativeSkeletonProject', () => ReactNativeSkeletonProject);
