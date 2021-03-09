import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Title extends Component{
    render(){
        return(
            <View>
                <Text style= {styles.titles}> {this.props.textTitle} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titles: {
        color: 'blue',
        fontSize: 28,
        marginLeft: 10
    }
    
})

