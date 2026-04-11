import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function LoginScreen() {

    const router = useRouter();

    const [secureText, setSecureText] = useState(true);

    function trocarEstadoSenha() {
        setSecureText(!secureText);
    }

    function logar() {
        router.replace("/(tabs)/home");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.innerContainer}>

                <Text style={styles.systemName}>
                    Ticketmaster
                </Text>

                <View style={styles.logoContainer}>
                    <Ionicons
                        name="ticket-outline"
                        size={72}
                        color="#111"
                    />
                </View>

                <Text style={styles.title}>
                    Acesse sua conta
                </Text>

                <Text style={styles.label}>
                    E-mail
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="email@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>
                    Senha
                </Text>

                <View style={styles.passwordContainer}>

                    <TextInput
                        style={styles.passwordInput}
                        placeholder="*********"
                        secureTextEntry={secureText}
                    />

                    <TouchableOpacity
                        onPress={trocarEstadoSenha}
                        style={styles.iconContainer}
                    >
                        <Ionicons
                            name={
                                secureText
                                    ? "eye-off-outline"
                                    : "eye-outline"
                            }
                            size={20}
                            color="#8e8e93"
                        />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={logar}
                    activeOpacity={0.85}
                >
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },

    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24
    },

    systemName: {
        fontSize: 30,
        fontWeight: "700",
        color: "#111",
        marginBottom: 6,
        letterSpacing: 1
    },

    /* ÍCONE */

    logoContainer: {
        marginBottom: 24
    },

    /* TÍTULO */

    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#1c1c1e",
        marginBottom: 32
    },

    /* LABEL */

    label: {
        alignSelf: "flex-start",
        fontSize: 14,
        fontWeight: "600",
        color: "#8e8e93",
        marginBottom: 6
    },

    /* INPUT */

    input: {
        width: "100%",
        height: 52,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 14,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#111",
        backgroundColor: "#F9FAFB",
        marginBottom: 16
    },

    /* PASSWORD */

    passwordContainer: {
        flexDirection: "row",
        width: "100%",
        height: 52,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        borderRadius: 14,
        backgroundColor: "#F9FAFB",
        marginBottom: 20,
        overflow: "hidden"
    },

    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#111"
    },

    iconContainer: {
        justifyContent: "center",
        paddingHorizontal: 15
    },

    /* BOTÃO PRETO */

    button: {
        width: "100%",
        height: 52,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8,

        backgroundColor: "#000",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "700",
        color: "#FFF",
        letterSpacing: 0.5
    }

});