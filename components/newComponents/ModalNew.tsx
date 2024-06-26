import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import OptionModalNew from './OptionModalNew';

type Props = {
    visible: any,
    onClose: any,
}

export default function ModalNew(props: Props) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            onRequestClose={props.onClose}
        >
            <TouchableWithoutFeedback onPress={props.onClose}>
                <View style={styles.modalBackground}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContainer}>
                        <View style={styles.container}>
                            <View style={styles.buttonsContainer}>
                                <OptionModalNew
                                    title="Criar evento"
                                    iconName="calendar-outline"
                                    onPress={() => {
                                        props.onClose();
                                        router.push({ pathname: "screens/new/event" });
                                    }}
                                    backgroundColor={Colors.white}
                                    textColor={Colors.orange}
                                    borderColor={Colors.white}
                                    width={200}
                                />

                                <OptionModalNew
                                    title="Escrever post"
                                    iconName="create-outline"
                                    onPress={() => { }}
                                    backgroundColor={Colors.white}
                                    textColor={Colors.orange}
                                    borderColor={Colors.white}
                                    width={200}
                                />

                                <OptionModalNew
                                    title="Criar recompensa"
                                    iconName="cart-outline"
                                    onPress={() => { }}
                                    backgroundColor={Colors.white}
                                    textColor={Colors.orange}
                                    borderColor={Colors.white}
                                    width={200}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        paddingBottom: 75,
    },
    modalContainer: {
        backgroundColor: 'transparent',
        borderRadius: 30,
    },
    container: {
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    closeButton: {
        fontSize: 16,
        color: Colors.red,
    },
    buttonsContainer: {
        gap: 5,
    },
});
