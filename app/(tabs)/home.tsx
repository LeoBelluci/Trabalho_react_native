
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
import { useCart } from "../../contexts/CartContext";

type RenderizarEventoProps = {
  item: Event;
};

export default function HomeScreen() {

  const router = useRouter();

  const { addToCart } = useCart();

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

            {/* BOTÃO COMPRAR (AGORA FUNCIONAL) */}
            <TouchableOpacity
              style={styles.botaoComprar}
              onPress={() => addToCart(item)}
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
        data={DADOS_EVENTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderizarEvento}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listaContainer}
      />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "#FFF",

    borderBottomWidth: 0.5,
    borderBottomColor: "#EEE"
  },

  profileButton: {
    width: 36,
    height: 36
  },

  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18
  },

  logoContainer: {
    alignItems: "center"
  },

  logoText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000"
  },

  searchWrapper: {
    paddingHorizontal: 20,
    paddingTop: 14
  },

  inputBuscaContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 14,
    height: 48,
    paddingHorizontal: 12,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2
  },

  inputBusca: {
    flex: 1,
    paddingHorizontal: 8,
    color: "#000"
  },

  listaContainer: {
    padding: 20,
    paddingBottom: 120
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    marginBottom: 18,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3
  },

  imagemCapa: {
    width: "100%",
    height: 170
  },

  infoContainer: {
    padding: 16
  },

  dataTexto: {
    color: "#888",
    fontWeight: "500",
    fontSize: 12
  },

  tituloTexto: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginTop: 4
  },

  localTexto: {
    color: "#777",
    marginTop: 2
  },

  rodapeCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    justifyContent: "space-between"
  },

  precoTexto: {
    fontWeight: "600",
    color: "#000"
  },

  botaoComprar: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },

  textoBotao: {
    color: "#FFF",
    marginLeft: 6,
    fontSize: 13,
    fontWeight: "500"
  }
});
