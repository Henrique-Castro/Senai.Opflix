import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    AsyncStorage,
    Image,
    Button,
    StyleSheet,
    CheckBox
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
            userPassword: "123456",
            rememberMe: false
        }
    }

    async componentDidMount() {
        console.disableYellowBox = true;
        const storageRemember = JSON.parse(await AsyncStorage.getItem("@opflix:remember"));
        const storageToken = await AsyncStorage.getItem("@opflix:token");
        
        if(storageRemember == true && storageToken != null)
        {
            this.props.navigation.navigate('MainNavigation');
        }
    }


    _redirectToHome = async (token) => {
        if (token != null) {
            try {
                await AsyncStorage.setItem("@opflix:token", token);
                this.props.navigation.navigate('MainNavigation');
            }
            catch (error) {
                console.log(error);
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
            .catch(error => console.log(error))
    }

    toggleRememberMe = async () => {
        try {
            this.setState({rememberMe:!this.state.rememberMe});

            
            await AsyncStorage.setItem("@opflix:remember", JSON.stringify(!this.state.rememberMe));
        }
        catch(error){
            console.log(error);
        }
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
                    secureTextEntry={true}
                    onChangeText={userPassword => this.setState({ userPassword })}
                    value={this.state.userPassword}
                />
                <CheckBox
                    value={this.state.rememberMe}
                    onValueChange={(value) => this.toggleRememberMe(value)}
                />
                <Text>Remember Me</Text>
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
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 120,
    },
    inputText: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '90%',
        marginBottom: 40,
        paddingLeft: 10
    },
    loginButton: {
        alignSelf: 'center',
        padding: 5,
        borderRadius: 3,
        backgroundColor: '#5b3e8c',
    },
    textEntrar: {
        fontSize: 25,
        color: 'white',
    }

});