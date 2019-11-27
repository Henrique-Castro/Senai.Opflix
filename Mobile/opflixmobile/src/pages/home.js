import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Image, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import FlipToggle from 'react-native-flip-toggle-button';

import HeartEmptyIcon from '../assets/img/icones/heartEmptyIcon.png';
import HeartFilledIcon from '../assets/img/icones/heartFilledIcon.png';
import Axios from 'axios';
export default class Home extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            list: [],
            imgStateList: [
                idLancamento = "",
                state = false
            ],
            isActive: false,
            timer: null,
            oldCounter: 0,
            counter: 0
        }
    }

    componentDidMount() {
        this._getSnapshot();
        let timer = setInterval(this._getSnapshot, 1000);
        this.setState({ timer: timer });
    }

    // _updateImgStates = async (list) =>{
    //     list.forEach(element => {
    //         this.setState({imgStateList:imgStateList+{idLancamento=element.idLancamento,}})
    //     });
    // }


    _getSnapshot = async () => {
        switch (this.state.isActive) {
            case false:
                await Axios.get('http://192.168.4.224:5000/api/Lancamentos/OrdenarPorData',
                    {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + await AsyncStorage.getItem('@opflix:token')
                        }
                    })
                    // .then(data => console.warn(data))
                    .then(response => this.setState({ list: response.data }))
                    .catch(error => console.warn(error))
                break;
            case true:
                await Axios.get('http://192.168.4.224:5000/api/Lancamentos/OrdenarPorCategoria',
                    {
                        headers: {
                            Accept: "aaplication/json",
                            "Content-Type": "aaplication/json",
                            "Authorization": "Bearer " + await AsyncStorage.getItem('@opflix:token')
                        }
                    })
                    // .then(data => console.warn(data))
                    .then(response => this.setState({ list: response.data }))
                    .then()
                    .catch(error => console.warn(error))
                break;
            default:
                await Axios.get('http://192.168.4.224:5000/api/Lancamentos/Visiveis',
                    {
                        headers: {
                            Accept: "aaplication/json",
                            "Content-Type": "aaplication/json",
                            "Authorization": "Bearer " + await AsyncStorage.getItem('@opflix:token')
                        }
                    })
                    // .then(data => console.warn(data))
                    .then(response => this.setState({ list: response.data }))
                    .catch(error => console.warn(error))
                break;
        }

    }
    logout = async () => {

        await AsyncStorage.removeItem("@opflix:token");
        this.props.navigation.navigate('AuthStack');

    }
    _onPressFavoritar = async (id) => {

    }
    render() {
        return (
            <View style={styles.pageBackgroud}>
                <TouchableOpacity
                    onPress={this.logout}>
                    <Text style={styles.logoutButton}>Sair</Text>
                </TouchableOpacity>

                <View style={styles.flexContainer}>

                    <Text style={styles.h2}>Lançamentos</Text>
                    <Text style={styles.sideText}>Filtrar por</Text>
                    <FlipToggle
                        value={this.state.isActive}
                        buttonWidth={70}
                        buttonHeight={30}
                        buttonRadius={10}
                        sliderWidth={10}
                        buttonOnColor={'#5b3e8c'}
                        buttonOffColor={'#5b3e8c'}
                        sliderRadius={50}
                        sliderOnColor={'#2e2e2e'}
                        sliderOffColor={'#2e2e2e'}
                        onLabel={'Categorias'}
                        offLabel={'Data'}
                        labelStyle={{ color: 'white' }}
                        onToggle={() => {
                            this.setState({ isActive: !this.state.isActive, counter: this.state.counter + 1 });
                        }}
                        onToggleLongPress={() => console.log('toggle long pressed!')}
                    />
                </View>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.tableHead}>
                            <Text style={styles.tableHeadText}>Título</Text>
                            <Text style={styles.tableHeadText}>Categoria</Text>
                        </View>
                    }
                    data={this.state.list}
                    keyExtractor={item => item.idLancamento.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.tableContent}>
                            <Text style={styles.tableTituloContent}>{item.titulo}</Text>
                            <Text style={styles.tableCategoriaContent}>{item.categoria}</Text>
                            <TouchableHighlight onPress={() => this._onPressFavoritar(item.idLancamento)}>
                                <Image
                                    style={styles.tableImageContent}
                                    source={HeartEmptyIcon}
                                    value={item.idLancamento}
                                />
                            </TouchableHighlight>

                        </View>
                    )}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    pageBackgroud: {
        backgroundColor: '#2e2e2e',
        height: '100%',
        color: 'white'
    },
    h2: {
        fontSize: 40,
        paddingLeft: 10,
        color: 'white'
    },
    flexContainer: {
        flexDirection: 'row'
    },
    logoutButton: {
        color: 'white',
        width: '100%',
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        opacity: 1
    },
    sideText: {
        alignSelf: 'auto',
        marginLeft: 10,
        marginTop: 'auto',
        marginRight: 7,
        marginBottom: 'auto',
        fontSize: 15,
        color: 'white'
    },
    tableHead: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderTopColor: 'rgba(255, 255, 255, 0.5)',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        paddingVertical: 2
    },
    tableHeadText: {
        color: 'white',
        fontSize: 20,
        marginLeft: -100
    },
    tableContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 2,
    },
    tableTituloContent: {
        color: 'white',
        fontSize: 30,
        width: '40%',
        height: 50,
        flexWrap: 'nowrap',
    },
    tableCategoriaContent: {
        color: 'white',
        fontSize: 30,
        height: 50,
        flexWrap: 'nowrap',
    },
    tableImageContent: {
        height: 50,
        width: 60,
    }
})