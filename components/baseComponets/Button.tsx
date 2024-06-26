import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string,
    onPress: any,
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    borderRadius: number,
    width?: number,
    height?: number,
    fontSize?: number,
    iconName?: undefined,
}

export default function Button(props: Props) {
    return (
        <TouchableOpacity style={[styles.button,
        { backgroundColor: props.backgroundColor },
        { borderRadius: props.borderRadius },
        { width: props.width },
        { height: props.height },
        { borderColor: props.borderColor }]} onPress={props.onPress}>
            <Ionicons name={props.iconName} size={18} color={props.textColor} style={styles.icon} />
            <Text style={[styles.buttonText, { color: props.textColor }, { fontSize: props.fontSize }]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        alignSelf: 'center',
        borderWidth: 1,
    },
    icon: {
        marginEnd: 3

    },
    buttonText: {
        fontSize: 16,
    },
});