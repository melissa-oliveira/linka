import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";

type Props = {
    userFirstName: string,
    userSurename: string,
    userProfileImageUrl: string,
}

export default function Header(props: Props) {
    return (
        <View style={styles.header}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: props.userProfileImageUrl }} style={styles.profileImage} />
                <Text style={styles.userName}>{`${props.userFirstName} ${props.userSurename}`}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name="notifications-outline" size={28} color={Colors.orange} style={styles.icon} />
                <Ionicons name="search-outline" size={28} color={Colors.orange} style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.mediumGray,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10,
        borderWidth: 1,
        borderColor: Colors.mediumGray
    },
    userName: {
        fontSize: 16,
        color: Colors.black,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 15,
    },
});
