import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Produto from './src/components/produto';
import Upbar from './src/components/upbar';
import Downbar from './src/components/downbar';
import Title from './src/components/title';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', referencia: '006', nome: 'Arroz', valor: 25.99, marca: 'Zaeli', quantidade: '6', desconto: '10% de desconto', atacado: 'Leve 6 pague 5' },
        { id: '2', referencia: '009', nome: 'Feijão', valor: 6.99, marca: 'Dona Zica', quantidade: '30', desconto: '5% de desconto', atacado: 'Leve 30 pague 28' },
        { id: '3', referencia: '012', nome: 'Detergente', valor: 1.79, marca: 'Limpol', quantidade: '24', desconto: '20% de desconto', atacado: 'Leve 24 pague 22' },
        { id: '4', referencia: '014', nome: 'Desinfetante', valor: 4.99, marca: 'Vorel', quantidade: '6', desconto: '10% de desconto', atacado: 'Leve 6 pague 5' },
        { id: '5', referencia: '020', nome: 'Macarrão', valor: 4.89, marca: 'Yara', quantidade: '15', desconto: '10% de desconto', atacado: 'Leve 15 pague 12' },
        { id: '6', referencia: '008', nome: 'Desodorante', valor: 12.99, marca: 'Rexona', quantidade: '12', desconto: '20% de desconto', atacado: 'Leve 12 pague 10' },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Upbar style={styles.barra} />
        <Title textTitle='Lista de Produtos' />
        <View>
          <FlatList style={styles.lista}
            showsVerticalSrollIndicator={false}
            data={this.state.feed}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <Produto
                id={item.id}
                referencia={item.referencia}
                nome={item.nome}
                valor={item.valor}
                marca={item.marca}
                quantidade={item.quantidade}
                desconto={item.desconto}
                atacado={item.atacado}
              />}
          />
        </View>
        <Downbar textDown='Products Bela Vista - 2021' />
      </View>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  lista: {
    flex: 1
  }
})





