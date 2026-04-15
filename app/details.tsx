
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
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../contexts/CartContext";

export default function DetailsScreen() {

  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { addToCart } = useCart();

  const evento = DADOS_EVENTOS.find(
    (item) => item.id === String(id)
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

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {evento.titulo}
        </Text>
      </View>

      {/* IMAGEM */}
      <Image
        source={{ uri: evento.imagem }}
        style={styles.image}
      />

      {/* TÍTULO */}
      <Text style={styles.title}>
        {evento.titulo}
      </Text>

      {/* CARD INFO */}
      <View style={styles.infoCard}>

        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color="#007AFF" />
          <View>
            <Text style={styles.infoLabel}>Data e Hora</Text>
            <Text style={styles.infoText}>{evento.data}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color="#007AFF" />
          <View>
            <Text style={styles.infoLabel}>Localização</Text>
            <Text style={styles.infoText}>{evento.local}</Text>
          </View>
        </View>

      </View>

      {/* DESCRIÇÃO */}
      <Text style={styles.sectionTitle}>
        Sobre o evento
      </Text>

      <Text style={styles.description}>
        Este evento é uma oportunidade incrível para networking,
        aprendizado e troca de experiências. Aqui você pode
        colocar uma descrição mais completa para atender o requisito.
      </Text>

      {/* BOTÃO */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => addToCart(evento)}
      >
        <Text style={styles.buttonText}>
          Garantir Ingresso
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 16
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600"
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 12
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10
  },

  infoCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    gap: 15
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  infoLabel: {
    fontSize: 12,
    color: "#888"
  },

  infoText: {
    fontSize: 14,
    fontWeight: "500"
  },

  sectionTitle: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold"
  },

  description: {
    marginTop: 8,
    color: "#555",
    lineHeight: 20
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }

});

