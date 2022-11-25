import { doc, getDoc } from "firebase/firestore";
import { useEffect, React } from "react";
import { FlatList } from "react-native-web";
import { db } from "../config/firebase-config";
import PlantaCard from "./PlantaCard";

export default function ListarPlantas() {

    const ver = () => {
      const plantasRef = db.collection('plantas');
      const snapshot = plantasRef.get();
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      }

    useEffect(() => {
      ver()
    }, [])
  
    return <>
      <FlatList
        data={data}
        renderItem={PlantaCard}
        keyExtractor={DATA => DATA.id}
        // ListHeaderComponent={() => {
        //   return <>
        //    <MyCard />
        //   </>
        // }}
      />
    </>
  }