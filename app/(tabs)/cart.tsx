import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useCart } from "../../contexts/CartContext";

export default function Cart() {

  const { cart, removeFromCart } = useCart();

  // 🔥 calcular total corretamente (string → número)
  const total = cart.reduce((soma, item) => {
    const valor = Number(
      item.preco.replace("R$", "").replace(",", ".")
    );
    return soma + valor;
  }, 0);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Meu Carrinho ({cart.length} itens)
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item, index) => item.id + index} // evita erro de chave duplicada
        showsVerticalScrollIndicator={false}

        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Seu carrinho está vazio 🛒
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

              <Text style={styles.info}>
                📅 {item.data}
              </Text>

              <Text style={styles.info}>
                📍 {item.local}
              </Text>

              <Text style={styles.price}>
                {item.preco}
              </Text>

            </View>

            {/* BOTÃO REMOVER FUNCIONAL */}
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <MaterialIcons
                name="delete"
                size={24}
                color="red"
              />
            </TouchableOpacity>

          </View>
        )}
      />

      <Text style={styles.total}>
        Total: R$ {total.toFixed(2)}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Finalizar Compra
        </Text>
      </TouchableOpacity>

    </View>
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
    fontWeight: "bold",
    marginBottom: 10
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center"
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10
  },

  name: {
    fontSize: 16,
    fontWeight: "bold"
  },

  info: {
    fontSize: 14,
    color: "#555"
  },

  price: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }

});

