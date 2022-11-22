import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../config/firebase-config'
import { toast } from 'react-toastify'
import LogoCadastroPlanta from '../components/LogoCadastroPlanta'
import { addDoc, collection } from 'firebase/firestore'
import { uuidv4 as uuid } from '@firebase/util'

export default function CadastroPlanta({ navigation }) {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

const cadastrar = () => {
    const id = uuid();
    addDoc(collection(db, "plantas"), 
    {
      id: id,
      nome: name,
      descricao: description,
      preco: price
    })
    .then( () => {
        toast.success('Planta cadastrada!')
    })
    .catch(error => {
      console.log(error);
  })
  setName('');
  setDescription('');
  setPrice('');
}

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <LogoCadastroPlanta />
      <Header>Nova Planta 🪴</Header>

      <TextInput
        label="Nome"
        returnKeyType="next"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        label="Descrição"
        returnKeyType="next"
        value={description}
        onChangeText={(text) => setDescription(text)}
        autoCapitalize="none"
        autoCompleteType="descrição"
      />

      <TextInput
        label="Preço"
        returnKeyType="done"
        value={price}
        onChangeText={(text) => setPrice(text)}
        autoCompleteType="preço"
      />

      <Button
        mode="contained"
        onPress={cadastrar}
        style={{ marginTop: 24 }}
        >
        Salvar
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
