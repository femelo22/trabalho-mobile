import { signOut } from 'firebase/auth';
import React from 'react'
import Background from '../components/Background';
import Button from '../components/Button';
import Header from "../components/Header";
import { auth } from '../config/firebase-config';
export default function HomeScreen() {

    function logout() {
        signOut(auth).then(() => {
            navigation.navigate('StartScreen')
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
         <Background>
            <Header>Home</Header>
            <Button onPress={() => logout()}>
            Sair
            </Button>
         </Background>
        
       
    );
}