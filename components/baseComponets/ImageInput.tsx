import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ImageInput() {
    return (
        <TouchableOpacity style={styles.imageContainer}>
            <Ionicons name="image-outline" size={24} color={Colors.gray} />
            <Text style={styles.selectImageText}>Selecione uma imagem</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderStyle: 'dashed',
    },
    selectImageText: {
        color: 'gray',
    },
});