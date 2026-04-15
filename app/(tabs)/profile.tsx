import { useRouter } from "expo-router";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {

    const router = useRouter();

    function onSairPress() {
        router.replace("/login");
    }

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = (screenWidth - 60) / 2;

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.row}>

                <Pressable
                    style={({ pressed }) => [
                        styles.card,
                        { width: cardWidth },
                        pressed && styles.cardHover
                    ]}
                >
                    <Image
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/23381292?v=4"
                        }}
                        style={styles.profileImage}
                    />

                    <Text style={styles.textName}>
                        Leonardo B.
                    </Text>

                    <Text style={styles.textBio}>
                        Desenvolvedor de software com experiência em React Native e Node.js
                    </Text>

                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.card,
                        { width: cardWidth },
                        pressed && styles.cardHover
                    ]}
                >
                    <Image
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/177074274?v=4"
                        }}
                        style={styles.profileImage}
                    />

                    <Text style={styles.textName}>
                        Bruno M.
                    </Text>

                    <Text style={styles.textBio}>
                        Desenvolvedor de software e entusiasta de tecnologia.
                    </Text>

                </Pressable>

            </View>

            <TouchableOpacity
                style={styles.botaoSair}
                onPress={onSairPress}
            >
                <Text style={styles.textBotao}>
                    Sair
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 14,
        width: "100%"
    },

    card: {
        backgroundColor: "#FFF",
        paddingVertical: 20,
        paddingHorizontal: 14,
        borderRadius: 20,
        alignItems: "center",

        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },

        elevation: 2
    },

    cardHover: {
        transform: [{ scale: 1.03 }]
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12
    },

    textName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        marginBottom: 6
    },

    textBio: {
        fontSize: 13,
        textAlign: "center",
        color: "#777",
        lineHeight: 18
    },

    botaoSair: {
        marginTop: 50,
        backgroundColor: "#000",
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: "center"
    },

    textBotao: {
        color: "#FFF",
        fontWeight: "500",
        fontSize: 15
    }

});