import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { DADOS_EVENTOS } from '../../mocks/event';
import { Event } from '../../types/event';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from "react";

type RenderizarEventoProps = {
  item: Event;
};

export default function HomeScreen() {

  const router = useRouter();

  const [eventos, setEventos] = useState(DADOS_EVENTOS);

  // 🔥 remover evento
  function removerEvento(id: string) {
    const novaLista = eventos.filter((item) => item.id !== id);
    setEventos(novaLista);
  }

  // 🛒 adicionar (simulação)
 function adicionarEvento(evento: Event) {
  const existe = eventos.find((item) => item.id === evento.id);

  if (existe) return; // não adiciona duplicado

  setEventos((prev) => [...prev, evento]);
}

  const renderizarEvento = ({ item }: RenderizarEventoProps) => {

    return (

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          router.push({
            pathname: "/details",
            params: { id: item.id }
          })
        }
      >

        <Image
          source={{ uri: item.imagem }}
          style={styles.imagemCapa}
        />

        <View style={styles.infoContainer}>

          <Text style={styles.dataTexto}>
            {item.data}
          </Text>

          <Text style={styles.tituloTexto} numberOfLines={2}>
            {item.titulo}
          </Text>

          <Text style={styles.localTexto}>
            {item.local}
          </Text>

          <View style={styles.rodapeCard}>

            <Text style={styles.precoTexto}>
              {item.preco}
            </Text>

            {/* BOTÃO ADICIONAR */}
            <TouchableOpacity
              style={styles.botaoComprar}
              onPress={() => adicionarEvento(item)}
            >
              <FontAwesome
                name="shopping-cart"
                size={18}
                color="#FFF"
              />
              <Text style={styles.textoBotao}>
                Comprar
              </Text>
            </TouchableOpacity>

            {/* BOTÃO REMOVER */}
            <TouchableOpacity
              onPress={() => removerEvento(item.id)}
              style={{ marginLeft: 10 }}
            >
              <Text style={{ color: "red", fontWeight: "bold" }}>
                Remover
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </TouchableOpacity>

    );

  };

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => router.push("/profile")}
        >
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/23381292?s=400"
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Ionicons name="ticket-outline" size={36} color="#000" />
          <Text style={styles.logoText}>
            Ticket App
          </Text>
        </View>

        <View style={{ width: 40 }} />

      </View>

      {/* BUSCA */}
      <View style={styles.searchWrapper}>
        <Pressable style={styles.inputBuscaContainer}>
          <Ionicons name="search" size={18} color="#999" style={{ marginLeft: 10 }} />
          <TextInput
            style={styles.inputBusca}
            placeholder="Buscar eventos..."
          />
        </Pressable>
      </View>

      {/* LISTA */}
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={renderizarEvento}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaContainer}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF"
  },

  profileButton: { width: 40, height: 40 },

  profileImage: { width: 40, height: 40, borderRadius: 20 },

  logoContainer: { alignItems: "center" },

  logoText: { fontSize: 12, fontWeight: "600" },

  searchWrapper: { paddingHorizontal: 20, paddingTop: 15 },

  inputBuscaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    height: 50
  },

  inputBusca: {
    flex: 1,
    paddingHorizontal: 10
  },

  listaContainer: {
    padding: 20,
    paddingBottom: 120
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    marginBottom: 20,
    overflow: "hidden"
  },

  imagemCapa: {
    width: "100%",
    height: 170
  },

  infoContainer: {
    padding: 16
  },

  dataTexto: {
    color: "#E63946",
    fontWeight: "700"
  },

  tituloTexto: {
    fontSize: 18,
    fontWeight: "bold"
  },

  localTexto: {
    color: "#666"
  },

  rodapeCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },

  precoTexto: {
    fontWeight: "bold"
  },

  botaoComprar: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10
  },

  textoBotao: {
    color: "#FFF",
    marginLeft: 5
  }

});

