import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    AsyncStorage,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import OpflixLogo from '../assets/img/logoEscuro.png';


export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            userEmail: "",
            userPassword: ""
        }
    }

    _redirectToHome = async (token) =>{
        if(token != null){
            try{
                await AsyncStorage.setItem('@opflix:token', token);
                this.props.navigation.Navigate('MainNavigation');
            }
            catch(error){
                console.warn(error);
            }
        }
    }

    _signIn = async () => {
        fetch('http://localhost:5000/api/Usuarios/Login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.userEmail,
                senha: this.state.userPassword
            })
        })
        .then(response => response.json())
        .then(data => this._redirectToHome(data.token))
        .catch(error => console.warn(error))
    }

    render() {
        return (
            <View style={styles.pageBackground}>
                <Image style={styles.opflixLogo} source={OpflixLogo} />
                <TextInput
                    placeholder="Email"
                    onChangeText={userEmail => this.setState({ userEmail })}
                    value={this.state.userEmail}
                />
                <TextInput
                    placeholder="Senha"
                    onChangeText={userPassword => this.setState({ userPassword })}
                    value={this.state.userPassword}
                />
                <TouchableOpacity onPress={this._signIn}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageBackground: {
        backgroundColor: '#2e2e2e',
        height: '100%',
    },
    opflixLogo: {
        height: 80,
        marginLeft: 'auto',
        marginRight: 'auto'
    },

});