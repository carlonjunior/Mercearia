import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Downbar extends Component{
    render(){
        return(
            <View style= {styles.container}>
                 <View>
                    <Text style={styles.texto}>{this.props.textDown}</Text>
                 </View>                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#696969',
        heigth: 50
    },
    texto: {
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})