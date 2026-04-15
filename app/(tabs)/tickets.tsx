import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
  Platform,
  SafeAreaView
} from "react-native";

import { useCart } from "../../contexts/CartContext";

export default function Tickets() {

  const { tickets } = useCart();

  function gerarCodigo() {
    return "TKT-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
      <View style={styles.container}>

        <Text style={styles.title}>
          Meus Bilhetes ({tickets.length})
        </Text>

        <FlatList
          data={tickets}
          keyExtractor={(item, index) => item.id + index}

          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Nenhum bilhete comprado 🎟️
            </Text>
          }

          renderItem={({ item }) => (
            <View style={styles.card}>

              <Image
                source={{ uri: item.imagem }}
                style={styles.image}
              />

              <View style={{ flex: 1 }}>

                <Text style={styles.name}>
                  {item.titulo}
                </Text>

                <Text>
                  {item.data}
                </Text>

                <Text>
                  {item.local}
                </Text>

                <Text style={styles.code}>
                  Código: {gerarCodigo()}
                </Text>

              </View>

            </View>
          )}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5"
  },

  title: {
    fontSize: 22,
    fontWeight: "bold"
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },

  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8
  },

  name: {
    fontWeight: "bold"
  },

  code: {
    marginTop: 5,
    color: "green",
    fontWeight: "bold"
  }

});