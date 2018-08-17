import React, { Component } from 'react';
import {Text} from 'react-native';
import {Header, Body, Left, Icon, Title, Right, Button} from 'native-base';
class CustomHeader extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Header>
                <Left>
                    <Icon name="ios-menu" onPress={() => this.props.drawerOpen()} />
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right>
                    <Button hasText 
                            transparent 
                            onPress={() => this.props.goToLogin()}>
                        <Text>Cancel</Text>
                    </Button>
                </Right>
            </Header>
        );
    }
}

export default CustomHeader;