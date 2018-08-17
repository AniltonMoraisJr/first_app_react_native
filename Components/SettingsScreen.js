import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import { Container, Button, Header, Content, Icon } from "native-base";
import { onSignOut } from "../auth"
/* Utils */
import CustomHeader from './Utils/CustomHeader';

class SettingsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/DrawerIcons/settings.png')}/>
        ),
    })
    render () {
        return (
            <Container>
                <CustomHeader title="Settings" 
                                drawerOpen={() => this.props.navigation.openDrawer()} 
                                goToLogin={() => {
                                    onSignOut().then(() => this.props.navigation.navigate("LoginNav"))
                                }}/>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        source={require('../assets/DrawerIcons/settings128.png')}
                        style={{height: 128, width: 128}}/>
                    <Text style={{ fontSize: 20 }}> SettingsScreen </Text>
                </Content>
            </Container>
        );
    }
}

export default SettingsScreen;