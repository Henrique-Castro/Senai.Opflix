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
import { whileStatement } from '@babel/types';


export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            userEmail: "hcdsfigueira@gmail.com",
            userPassword: "123456"
        }
    }

    _redirectToHome = async (token) =>{
        if(token != null){
            try{
                await AsyncStorage.setItem('@opflix:token', token);
                this.props.navigation.navigate('MainNavigation');
            }
            catch(error){
                console.warn(error);
            }
        }
    }

    _signIn = async () => {
        fetch('http://192.168.4.224:5000/api/Usuarios/Login', {
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
                    style={styles.inputText}
                    placeholder="Email"
                    onChangeText={userEmail => this.setState({ userEmail })}
                    value={this.state.userEmail}
                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Senha"
                    onChangeText={userPassword => this.setState({ userPassword })}
                    value={this.state.userPassword}
                />
                <TouchableOpacity style={styles.loginButton} onPress={this._signIn}>
                    <Text style={styles.textEntrar}>Entrar</Text>
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
        marginRight: 'auto',
        marginBottom:120,
    },
    inputText:{
        alignSelf:'center',
        backgroundColor:'white',
        width:'90%',
        marginBottom:40,
        paddingLeft:10
    },
    loginButton:{
        alignSelf:'center',
        padding:5,
        borderRadius:3,
        backgroundColor:'#5b3e8c',
    },
    textEntrar:{
        fontSize:25,
        color:'white',
    }

});