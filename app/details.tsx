
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Platform
} from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';
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

    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}
    >
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 16
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111"
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 16
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 12,
    color: "#000"
  },

  infoCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    gap: 16,

    // sombra iOS
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },

    // sombra Android
    elevation: 3
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },

  infoLabel: {
    fontSize: 12,
    color: "#999"
  },

  infoText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#111"
  },

  sectionTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "600",
    color: "#000"
  },

  description: {
    marginTop: 8,
    color: "#666",
    lineHeight: 22
  },

  button: {
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16
  }

});

