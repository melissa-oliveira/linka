import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string,
    onPress: any,
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    borderRadius: number,
    width: number,
    height?: number,
    fontSize?: number,
}

export default function Button(props: Props) {
    return (
        <TouchableOpacity style={[styles.button,
        { backgroundColor: props.backgroundColor },
        { borderRadius: props.borderRadius },
        { width: props.width },
        { height: props.height },
        { borderColor: props.borderColor }]} onPress={props.onPress}>
            <Text style={[styles.buttonText, { color: props.textColor }, { fontSize: props.fontSize }]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        alignSelf: 'center',
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 16,
    },
});