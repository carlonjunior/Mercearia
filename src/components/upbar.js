import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Upbar extends Component{
    render(){
        let imagem = 'https://jmonline.com.br/userfiles/image/2020/04/29/ronaldinho.jpg';

        return(
            <View style= {styles.container}>
                 <View>
                     <Image 
                        source={{uri: imagem }}
                        style={[{width: 50 , height: 50, marginLeft: 15}, styles.borda]}
                    />
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6495ED'
    },
    borda: {
        borderWidth: 5,
        borderColor: '#6495ED'
    }
})