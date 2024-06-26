import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Colors";

type Props = {
    usrename: string,
    userFirstName: string,
    userSurename: string,
    userProfileImageUrl: string,
    userType: string,
    userFollowers: string,
}

export default function ProfileInfo(props: Props) {
    return (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                <Image source={{ uri: props.userProfileImageUrl }} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <Text style={styles.userType}>{props.userType}</Text>
                    <Text style={styles.username}>@{props.usrename}</Text>
                    <Text style={styles.userFullName}>{`${props.userFirstName} ${props.userSurename}`}</Text>
                    <Text style={styles.userFollowers}>{props.userFollowers} Seguidores</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 10,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.mediumGray,
        marginRight: 10,
    },
    userInfo: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    username: {
        marginBottom: 13,
        fontSize: 12,
    },
    userFollowers: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    userFullName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 5,
    },
    userType: {
        fontSize: 12,
        color: Colors.gray,
        marginBottom: 3,
    },
});
