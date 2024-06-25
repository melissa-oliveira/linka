import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type Props = {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: any;
}

export default function Input(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    label: {
        marginBottom: 3,
        fontSize: 16,
        color: Colors.black,
    },
    inputContainer: {
        borderRadius: 5,
    },
    input: {
        height: 40,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor: Colors.lightGray,
        borderWidth: 1,
        borderColor: Colors.mediumGray,
    },
});
