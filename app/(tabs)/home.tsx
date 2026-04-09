import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DADOS_EVENTOS } from '../../mocks/event';
import { Event } from '../../types/event';
import { FontAwesome } from '@expo/vector-icons';

type RenderizarEventoProps = {
  item: Event;
}

const renderizarEvento = ({ item }: RenderizarEventoProps) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />
    
    <View style={styles.infoContainer}>
      <Text style={styles.dataTexto}>{item.data}</Text>
      <Text style={styles.tituloTexto} numberOfLines={2}>
        {item.titulo}
      </Text>
      <Text style={styles.localTexto}>{item.local}</Text>
      
      <View style={styles.rodapeCard}>
        <Text style={styles.precoTexto}>{item.preco}</Text>

        <TouchableOpacity style={styles.botaoComprar}>
          <FontAwesome name="shopping-cart" size={20} color="white" />
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>

      </View>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitulo}>
          Eventos ativos
        </Text>
    
        <Pressable
          style={({ pressed }) => [
            styles.inputBuscaContainer,
            pressed && styles.inputBuscaHover
          ]}
        >
          <TextInput
            style={styles.inputBusca}
            placeholder="Buscar eventos, shows, cursos..."
            placeholderTextColor="#999"
          />
        </Pressable>

      </View>

      <FlatList
        data={DADOS_EVENTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderizarEvento}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },

  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 15,
    textAlign: "center"
  },

  /* INPUT BUSCA */

  inputBuscaContainer: {
    backgroundColor: '#F0F2F5',
    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  inputBusca: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },

  inputBuscaHover: {
    borderWidth: 1,
    borderColor: '#0066FF',

    shadowColor: '#0066FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  /* LISTA */

  listaContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  /* CARD */

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',

    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  imagemCapa: {
    width: '100%',
    height: 160,
  },

  infoContainer: {
    padding: 15,
  },

  dataTexto: {
    color: '#FF5A5F',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 5,
    textTransform: 'uppercase',
  },

  tituloTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 8,
  },

  localTexto: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 15,
  },

  rodapeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 15,
  },

  precoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },

  botaoComprar: {
    backgroundColor: '#0066FF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,

    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    elevation: 2,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },

});