import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { auth } from '../config/firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
// import { toast } from 'react-toastify'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const logar = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response ) => {
        console.log('Logado')
        const user = response.user
        console.log(user)

        navigation.navigate('HomeScreen')
      })
      .catch(error => {
        toast.error('Credenciais inválidas.')
        setEmail('')
        setPassword('')
      })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Bem vindo de volta 👋🏻</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
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
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={logar}>
        Entrar
      </Button>
      <View style={styles.row}>
        <Text>Não possui conta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
