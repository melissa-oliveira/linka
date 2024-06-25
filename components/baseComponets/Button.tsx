import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
    title: string,
    onPress: any,
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    borderRadius: number,
}

export default function Button(props: Props) {
    return (
        <TouchableOpacity style={[styles.button,
        { backgroundColor: props.backgroundColor },
        { borderRadius: props.borderRadius },
        { borderColor: props.borderColor }]} onPress={props.onPress}>
            <Text style={[styles.buttonText, { color: props.textColor }]}>{props.title}</Text>
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