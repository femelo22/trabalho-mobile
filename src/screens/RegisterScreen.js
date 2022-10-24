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

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignUpPressed = () => {
    const nameError = nameValidator(name)
    const emailError = emailValidator(email)
    const passwordError = passwordValidator(password)

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

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
      <Logo />
      <Header>Criar conta</Header>
      <TextInput
        label="Nome"
        returnKeyType="next"
        value={name}
        onChangeText={(text) => setName(text)}
        // error={!!name.error}
        // errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password}
        onChangeText={(text) => setPassword(text)}
        // error={!!password.error}
        // errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={cadastrar}
        style={{ marginTop: 24 }}
      >
        Cadastrar
      </Button>
      <View style={styles.row}>
        <Text>Já possui uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Entrar</Text>
        </TouchableOpacity>
      </View>
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
