import { signOut } from 'firebase/auth';
import React from 'react'
import { View } from 'react-native-web';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from "../components/Header";
import { auth } from '../config/firebase-config';
export default function HomeScreen({ navigation }) {

    function logout() {
        signOut(auth).then(() => {
            navigation.navigate('StartScreen')
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
      <>
      <View style={{ flexDirection: 'row'}}>
        <View>
          <Button onPress={() => navigation.navigate('CadastroPlanta')}>Cadastrar Planta</Button>
        </View>
        <View>
          <Button onPress={() => logout()}> Sair </Button>
        </View>
      </View>
         
      {/* TODO: Improve */}
      <Background>
        <Header>Página principal do projeto</Header>
      </Background>
      </>
    );
}