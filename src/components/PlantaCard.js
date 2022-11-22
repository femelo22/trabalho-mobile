import React from 'react';
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";


export default function PlantaCard() {
   return <View>
    <Card style={styles.card}>
      <Card.Content>
        <Title>Curiosidade</Title>
        <Paragraph>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: `https://picsum.photos/100` }} />
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
  }
});