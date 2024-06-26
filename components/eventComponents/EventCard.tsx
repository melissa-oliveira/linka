import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View } from "react-native"

type Props = {
    eventTitle: string,
    eventDate: string,
    eventJobs: string,
    eventFilledJobs: string,
    eventImageUrl: string,
    onPress: any,
}

export default function EventCard(props: Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <ImageBackground source={{ uri: props.eventImageUrl }} style={styles.image}>
                <View style={styles.overlay}>
                    <View style={styles.content}>
                        <Text style={styles.date}>
                            <Ionicons name="calendar-clear-outline" size={12} color={Colors.white} style={styles.icons} /> {props.eventDate}
                        </Text>
                        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{props.eventTitle}</Text>
                        <Text style={styles.jobs}>
                            <Ionicons name="person-outline" size={14} color={Colors.white} style={styles.icons} /> {props.eventFilledJobs} / {props.eventJobs}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.black,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 110,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
    },
    content: {
        padding: 20,
    },
    date: {
        color: Colors.white,
        fontSize: 12,
    },
    title: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20,
    },
    jobs: {
        color: Colors.white,
        fontSize: 14,
    },
    icons: {
        padding: 0,
        margin: 0,
    }
})
