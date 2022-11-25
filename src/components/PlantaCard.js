import React from 'react';
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";


export default function PlantaCard(dados) {
 
  console.log(dados)

   return <View>
   <Card style={styles.card}>
      <Card.Content>
        <Title>{dados.item.nome}</Title>
        <Title style={styles.precoPlanta}>{`R$ ${dados.item.preco}`}</Title>
        <Paragraph>{dados.item.descricao}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: `${dados.item.img}` }} />
    </Card>
    <View style={styles.separador}></View>
  </View>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20
  },
  card: {
    marginBottom: 30
  },
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#373737',
  },
  precoPlanta: {
    color: '#008000',
  }
});