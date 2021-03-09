import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Produto extends Component {
    render() {
        return (
            <View style={styles.prod}>
                <Text style={styles.nomeprod}> {this.props.nome} </Text>
                <View style={styles.linha}>
                    <Text style={styles.dados}> Valor: {this.props.valor} </Text>
                    <Text style={styles.dados}> Marca: {this.props.marca} </Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.dados}> Qtdade: {this.props.quantidade} </Text>
                    <Text style={styles.dados}> Ref: {this.props.referencia} </Text>
                </View>
                <View style={[styles.linha, styles.menor]}>
                    <Text style={[styles.desc, styles.borda]}> {this.props.desconto} </Text>
                    <Text style={[styles.atac, styles.borda]}> {this.props.atacado} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    prod: {
        backgroundColor: '#708090',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        
    },
    nomeprod: {
        fontSize: 25,
        color: 'white'
    },
    dados: {
        flex: 1,
        fontSize: 14,
        color: 'white'
    },
    desc: {
        flex: 1,
        backgroundColor: '#00FF7F',
        fontSize: 14,
        color: 'white'
    },
    atac: {
        flex: 1,
        backgroundColor: '#FF8C00',
        fontSize: 14,
        color: 'white'
    },
    linha: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around' 
    },
    menor: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    borda: {
        borderWidth: 1,
        marginRight: 25
    }
})

