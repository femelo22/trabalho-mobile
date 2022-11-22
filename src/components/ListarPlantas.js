import { doc, getDoc } from "firebase/firestore";
import { FlatList } from "react-native-web";
import PlantaCard from "./PlantaCard";

export default function ListarPlantas() {

    const ver = () => {
        const docRef = doc(db, "plantas", 'oAQ4XhN8IRvKGDiWy3XM');
        const dados = getDoc(docRef)
        console.log(dados)
        .then((doc) => {
          if (doc.exists) {
            console.log("Dados: ", doc.data())
            return doc.data();
          } else {
            console.log("Erro");
        }})
        .catch(error => {
          console.log(error);
        })
      }

      const data = ver();
  
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