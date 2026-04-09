import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    const router = useRouter();

    function onSairPress() {
        router.replace("/login");
    }
    
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.row}>

                {/* CARD 1 */}
                <Pressable
                    style={({ pressed }) => [
                        styles.card,
                        pressed && styles.cardHover
                    ]}
                >
                    <Image 
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/23381292?s=400"
                        }}
                        style={styles.profileImage}
                    />

                    <Text style={styles.textName}>Leonardo</Text>

                    <Text style={styles.textBio}>
                       Desenvolvedor de software com experiência em React Native e Node.js.
                    </Text>
                </Pressable>

               
                {/* CARD 2 */}
                <Pressable
                    style={({ pressed }) => [
                        styles.card,
                        pressed && styles.cardHover
                    ]}
                >
                    <Image 
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/177074274?v=4"
                        }}  
                        style={styles.profileImage}
                    />

                    <Text style={styles.textName}>Bruno</Text>

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
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    row: {
        flexDirection: "row",
        gap: 15
    },

    botaoSair: {
        marginTop: 30,
        backgroundColor: "#FF5A5F",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6
    },

    textBotao: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },

    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10
    },

    /* CARD BASE */

    card: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        width: 160,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5
    },

    /* HOVER / PRESS EFFECT */

    cardHover: {
        transform: [{ scale: 1.06 }],

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,

        elevation: 12,

        backgroundColor: "#fafafa"
    },

    textName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10
    },

    textBio: {
        fontSize: 14,
        textAlign: "center",
        color: "#666",
        lineHeight: 20
    }

});