import React, { Component } from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import { onSignIn } from "../auth";

class LoginScreen extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Container >
                <Content contentContainerStyle={styles.container}>
                    <Image source={require('../assets/DrawerIcons/login-screen.png')}></Image>
                    <Form style={{width: 300}}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                        <Input keyboardType='email-address'/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry />
                        </Item>
                        <Button style={{marginTop: 10, width: 300, alignItems: 'center', justifyContent: 'center'}}
                                onPress={() => {
                                    onSignIn().then(() => this.props.navigation.navigate("AdminNav"));
                                }}
                                primary >
                                <Text style={{ color: 'white' }}>Sign In</Text>
                        </Button>
                    </Form>                    
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default LoginScreen