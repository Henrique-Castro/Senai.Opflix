import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            list:"",
        }
    }
    
    componentDidMount() {
        this._getSnapshot();
        console.warn(this.state.list);
    }

    _getSnapshot = async() =>{
        await fetch('http://192.168.4.224:5000/api/Lancamentos/Visiveis',
        {
            method:"GET",
            headers:{
                Accept  : "aaplication/json",
                "Content-Type" : "aaplication/json",
                "Authorization" : "Bearer "+ await AsyncStorage.getItem('@opflix:token')
            }
        })
        .then(response => response.json())
        // .then(data => console.warn(data))
        .then(data => this.setState({list:data}))
        .catch(error => console.warn(error))
    }


    render() {
        return (
            <View style={styles.pageBackgroud}>
                <View style={styles.flexContainer}>
                    <Text style={styles.h2}>Lançamentos</Text>
                    <Text style={styles.sideText}>Filtrar por</Text>
                </View>
                <FlatList
                    ListHeaderComponent={<View style={styles.tableHead}>
                        <Text style={styles.tableHeadText}>Título</Text>
                        <Text style={styles.tableHeadText}>Categoria</Text>
                        </View>}
                    data={this.state.list}
                    keyExtractor = {item => item.idLancamento.toString()}
                    renderItem={({item}) =>(
                        <ScrollView>
                            <Text>{item.Titulo}</Text>
                        </ScrollView>
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
    sideText: {
        alignSelf: 'center',
        marginLeft: 30,
        fontSize: 20,
        color: 'white'
    },
    tableHead:{
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomColor:'rgba(255, 255, 255, 0.5)',
        borderTopColor:'rgba(255, 255, 255, 0.5)',
        borderTopWidth:2,
        borderBottomWidth:2,
        paddingVertical:2
    },
    tableHeadText:{
        color:'white',
        fontSize:20,
        marginLeft:-100
    }
})