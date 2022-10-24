import React, { useEffect } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase-config'

export default function StartScreen({ navigation }) {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('HomeScreen');
        console.log('chamou')
      }
    });
    
  }, [])


  return (
    <Background>
      <Logo />
      <Header>Entrar</Header>
      <Paragraph>
        {/* A sua loja virtual */}
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Entrar
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Cadastrar
      </Button>
    </Background>
  )
}
