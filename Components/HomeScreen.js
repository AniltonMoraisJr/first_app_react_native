import React, {Component} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import { Container, Button, Header, Content, Icon } from "native-base";
import { onSignOut } from "../auth"

/* Utils */
import CustomHeader from './Utils/CustomHeader';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} />,
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/DrawerIcons/home.png')}
            style={styles.icon}
          />
        ),
    })
    
    render () {
        return (
            <Container >
                <CustomHeader title="Home" 
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
                        source={require('../assets/DrawerIcons/home128.png')}
                        style={{height: 128, width: 128}}/>
                    <Text style={styles.text}> HomeScreen </Text>
                    <Button full iconLeft
                        onPress={() => this.props.navigation.navigate('Settings')} >
                        <Icon name='cog' />
                        <Text style={{ color: 'white' }}> Go To Settings Screen</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,  
    },
    icon: {
        width: 24,
        height: 24,
    },
})
export default HomeScreen;