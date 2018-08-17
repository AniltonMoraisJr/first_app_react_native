import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import {DrawerItems} from 'react-navigation';
import { Container, Header, Body, Content, Icon, H1, Text, } from 'native-base';
export default class customDrawerContent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <Container>
            <Header style={styles.drawerHeader}>
                <Body style={{  alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                    <Image
                        style={styles.drawerImage}
                        source={require('../../assets/DrawerIcons/profile.png')} />
                    <H1>Anilton M Junior</H1>
                    <Text>anilton.francisco@gmail.com</Text>
                </Body>
            </Header>
            <Content>
                <DrawerItems {...this.props} />
            </Content>
        </Container>
      )
    }
}
const styles = StyleSheet.create({
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    drawerHeader: {
        height: 220,
        backgroundColor: 'white'
    },
});
