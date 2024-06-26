import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";

type Props = {
    userFirstName: string,
    userSurename: string,
    userProfileImageUrl: string,
    userType: string,
    postDescription: string,
    postImageUrl: string,
    postLikesQnt: string,
    postCommentsQnt: string,
}

export default function Post(props: Props) {
    return (
        <View style={styles.postContainer}>
            <View style={styles.header}>
                <Image source={{ uri: props.userProfileImageUrl }} style={styles.profileImage} />
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{`${props.userFirstName} ${props.userSurename}`}</Text>
                    <Text style={styles.userType}>{props.userType}</Text>
                </View>
            </View>
            <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
                {props.postDescription}
            </Text>
            <TouchableOpacity>
                <Text style={styles.readMore}>Ler mais</Text>
            </TouchableOpacity>
            <Image source={{ uri: props.postImageUrl }} style={styles.postImage} />
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <Ionicons name="heart" size={24} color={Colors.gray} />
                    <Text style={styles.iconText}>{props.postLikesQnt}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="chatbox-ellipses" size={24} color={Colors.gray} />
                    <Text style={styles.iconText}>{props.postCommentsQnt}</Text>
                </View>
                <Ionicons name="share-social" size={24} color={Colors.gray} style={styles.shareIcon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        padding: 10,
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.mediumGray,
        marginRight: 10,
    },
    userInfo: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.black,
        marginBottom: 3,
    },
    userType: {
        fontSize: 14,
        color: Colors.gray,
    },
    description: {
        fontSize: 14,
        color: Colors.black,
        marginBottom: 5,
    },
    readMore: {
        color: Colors.orange,
        fontSize: 12,
        alignSelf: 'flex-end',
        textDecorationLine: 'underline',
    },
    postImage: {
        width: '100%',
        height: 200,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        marginVertical: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        fontSize: 14,
        color: Colors.gray,
        marginLeft: 5,
        marginRight: 10,
    },
    shareIcon: {
        marginLeft: 'auto',
    },
});
