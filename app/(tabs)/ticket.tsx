import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";

import { DADOS_EVENTOS } from "../../mocks/event";

export default function Tickets() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Meus Bilhetes ({DADOS_EVENTOS.length})
      </Text>

      <FlatList
        data={DADOS_EVENTOS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.imagem }}
              style={styles.image}
            />

            <View>
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
                Código: TKT-2026-A1B2
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },

  title: {
    fontSize: 22,
    fontWeight: "bold"
  },

  card: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10
  },

  image: {
    width: 80,
    height: 80,
    marginRight: 10
  },

  name: {
    fontWeight: "bold"
  },

  code: {
    marginTop: 5,
    color: "green"
  }
});