import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { useRouter, useLocalSearchParams } from "expo-router";
import { DADOS_EVENTOS } from "../mocks/event";

export default function DetailsScreen() {

  const router = useRouter();

  const params = useLocalSearchParams();

  const id = String(params.id);

  const evento = DADOS_EVENTOS.find(
    (item) => item.id === id
  );

  if (!evento) {
    return (
      <View style={styles.container}>
        <Text>Evento não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.voltar}
      >
        <Text>← Voltar</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: evento.imagem }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        {evento.titulo}
      </Text>

      <Text style={styles.info}>
        📅 {evento.data}
      </Text>

      <Text style={styles.info}>
        📍 {evento.local}
      </Text>

      <Text style={styles.preco}>
        {evento.preco}
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },

  voltar: {
    marginBottom: 10
  },

  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10
  },

  info: {
    fontSize: 16,
    marginTop: 6
  },

  preco: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  }

});