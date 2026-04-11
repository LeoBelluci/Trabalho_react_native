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
                            uri: "https://avatars.githubusercontent.com/u/23381292?s=400"
                        }}
                        style={styles.profileImage}
                    />

                    <Text style={styles.textName}>
                        Leonardo B.
                    </Text>

                    <Text style={styles.textBio}>
                        Desenvolvedor de software com experiência em React Native e Node.js.
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
        backgroundColor: "#F5F6FA",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 16,
        width: "100%"
    },

    card: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 22,
        paddingHorizontal: 16,
        borderRadius: 18,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
        elevation: 6
    },

    cardHover: {
        transform: [{ scale: 1.05 }],
        elevation: 12
    },

    profileImage: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 14
    },

    textName: {
        fontSize: 18,
        fontWeight: "600",
        color: "#1F2937",
        marginBottom: 8
    },

    textBio: {
        fontSize: 13.5,
        textAlign: "center",
        color: "#6B7280",
        lineHeight: 18
    },

    botaoSair: {
        marginTop: 40,
        backgroundColor: "#000000",
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 28,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.18,
        shadowRadius: 12,
        elevation: 8
    },

    textBotao: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 16
    }

});