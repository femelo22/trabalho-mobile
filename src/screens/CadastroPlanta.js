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
import { auth } from '../config/firebase-config'
import { toast } from 'react-toastify'
import LogoCadastroPlanta from '../components/LogoCadastroPlanta'

export default function CadastroPlanta({ navigation }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

//   const onSignUpPressed = () => {
//     const nameError = nameValidator(name)
//     const emailError = emailValidator(email)
//     const passwordError = passwordValidator(password)

//     if (emailError || passwordError || nameError) {
//       setName({ ...name, error: nameError })
//       setEmail({ ...email, error: emailError })
//       setPassword({ ...password, error: passwordError })
//       return
//     }

//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Dashboard' }],
//     })
//   }

  const cadastrar = () => {
    createUserWithEmailAndPassword(auth, email, password) 
      .then((response) => {
        console.log('criado com sucesso')
        const user = response.user
        console.log(user)
        toast.success('Conta registrada com sucesso!')
        navigation.navigate('LoginScreen')
      })
      .catch(error => {
        console.log(error)
        if(error.message === 'Firebase: Error (auth/email-already-in-use).') {
          toast.error('Email já cadastrado!')
        } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
          toast.error('Informações inválidas!')
        }
      })
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
        secureTextEntry
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