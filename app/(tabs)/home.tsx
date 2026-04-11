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

type RenderizarEventoProps = {
  item: Event;
};

const renderizarEvento = ({ item }: RenderizarEventoProps) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />

    <View style={styles.infoContainer}>
      <Text style={styles.dataTexto}>{item.data}</Text>

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

        <TouchableOpacity style={styles.botaoComprar}>
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
  </View>
);

export default function HomeScreen() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>

      {/* HEADER MODERNO */}

      <View style={styles.header}>

        {/* PERFIL */}

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

        {/* ÍCONE TICKET CENTRAL */}

        <View style={styles.logoContainer}>
          <Ionicons
            name="ticket-outline"
            size={36}
            color="#000"
          />
          <Text style={styles.logoText}>
            Ticket App
          </Text>
        </View>

        {/* ESPAÇO DIREITO (FUTURO NOTIFICAÇÃO) */}

        <View style={{ width: 40 }} />

      </View>

      {/* BUSCA */}

      <View style={styles.searchWrapper}>
        <Pressable
          style={({ pressed }) => [
            styles.inputBuscaContainer,
            pressed && styles.inputBuscaHover
          ]}
        >
          <Ionicons
            name="search"
            size={18}
            color="#999"
            style={{ marginLeft: 10 }}
          />

          <TextInput
            style={styles.inputBusca}
            placeholder="Buscar eventos, shows, cursos..."
            placeholderTextColor="#999"
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
    backgroundColor: "#F4F6F8"
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingVertical: 14,

    backgroundColor: "#FFFFFF",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4
  },

  /* PERFIL */

  profileButton: {
    width: 40,
    height: 40
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },

  /* LOGO */

  logoContainer: {
    alignItems: "center"
  },

  logoText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    marginTop: 2
  },

  /* BUSCA */

  searchWrapper: {
    paddingHorizontal: 20,
    paddingTop: 15
  },

  inputBuscaContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    height: 50,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2
  },

  inputBusca: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#1c1c1e"
  },

  inputBuscaHover: {
    borderWidth: 1,
    borderColor: "#000"
  },

  /* LISTA */

  listaContainer: {
    padding: 20,
    paddingBottom: 120
  },

  /* CARD */

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    marginBottom: 20,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4
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
    fontWeight: "700",
    fontSize: 13,
    marginBottom: 6,
    textTransform: "uppercase"
  },

  tituloTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 6
  },

  localTexto: {
    fontSize: 14,
    color: "#666",
    marginBottom: 14
  },

  rodapeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    paddingTop: 14
  },

  precoTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000"
  },

  botaoComprar: {
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,

    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14
  }

});