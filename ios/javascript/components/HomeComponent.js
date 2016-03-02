'use strict';

import React from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

import Styles from '../styles/Styles';

import SettingsComponent from './SettingsComponent';
import LoginComponent from './LoginComponent';

var {
    StyleSheet,
    Text,
    View
    } = React;

const glypy = glypyMapMaker({
    Home: 'e900',
    Camera: 'e901',
    Stat: 'e902',
    Settings: 'e903',
    Favorite: 'e904'
});

class HomeComponent extends React.Component {
    render() {
        return <Tabbar ref="myTabbar" barColor={'gray'}>
                <Tab name="home">
                    <IconWithBar label="Home" type={glypy.Home} from={'IcoMoon-Free'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>this.tabbarToggle()}>Toggle Tabbar</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="camera">
                    <IconWithBar label="Camera" type={glypy.Camera} from={'IcoMoon-Free'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('camera')}>Camera</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="stats">
                    <IconWithBar label="Stats" type={glypy.Stat} from={'IcoMoon-Free'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('stats')}>Stats</Text>
                        </View>
                    </RawContent>
                </Tab>
                <Tab name="favorite">
                    <IconWithBar label="Fav" type={glypy.Favorite} from={'IcoMoon-Free'}/>
                    <RawContent>
                        <SettingsComponent/>
                    </RawContent>
                </Tab>
                <Tab name="settings">
                    <IconWithBar label="Settings" type={glypy.Settings} from={'IcoMoon-Free'}/>
                    <RawContent>
                        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
                            <Text onPress={()=>console.log('settings')}>Settings</Text>
                        </View>
                    </RawContent>
                </Tab>
            </Tabbar>;
    }
}

module.exports = HomeComponent;