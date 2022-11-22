import { applyActionCode, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native-web';
import Background from '../components/Background';
import Button from '../components/Button';
import Header from "../components/Header";
import ListarPlantas from '../components/ListarPlantas';
import PlantaCard from '../components/PlantaCard';
import { auth, db } from '../config/firebase-config';
export default function HomeScreen({ navigation }) {

  const [dados, setDados] = useState({});

    function logout() {
        signOut(auth).then(() => {
            navigation.navigate('StartScreen')
          }).catch((error) => {
            // An error happened.
          });
    }

    const listarPlantas = async () => {
      const docRef = await db.firestore.collection('plantas').getDoc()
      console.log(docRef)
      .then((doc) => {
        if (doc.exists) {
          setDados(doc.data());
          console.log("Dados: ", doc.data())
          return doc.data();
        } else {
          console.log("Erro");
      }})
      .catch(error => {
        console.log(error);
      })
    }

    const DATA = [
      {
          id: 'bfb25ac6-fc9c-4c9e-ae3e-7ef140261e3f',
          nome: "Lágrimas de bebe",
          
        },
        {
          id: '25fb92d5-3814-4f1e-8117-d5486d5fb1e8',
          nome: "Colar de corações",
          
        }
    ]

    useEffect(() => {
      listarPlantas();
    }, []);


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
      
        <FlatList
          data={dados}
          renderItem={PlantaCard}
          keyExtractor={dados => dados.id}
          // ListHeaderComponent={() => {
          //   return <>
          //    <MyCard />
          //   </>
          // }}
        />
      
      </>
    );
}