import Header from "@/components/baseComponets/Header";
import React from 'react';
import { Colors } from "@/constants/Colors";
import Button from "@/components/baseComponets/Button";
import { Text, View, StyleSheet } from 'react-native';
import { router } from "expo-router";

export default function New() {

    return (
        <View style={styles.pageColor}>
            <Header
                userFirstName="Associação"
                userSurename="Betel"
                userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
            />

            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Criar Novo</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        title="Evento"
                        onPress={() => router.push({ pathname: "screens/new/event" })}
                        backgroundColor={Colors.orange}
                        textColor={Colors.white}
                        borderColor={Colors.orange}
                        borderRadius={12}
                        width={335}
                    />

                    <Button
                        title="Post"
                        onPress={() => { }}
                        backgroundColor={Colors.orange}
                        textColor={Colors.white}
                        borderColor={Colors.orange}
                        borderRadius={12}
                        width={335}
                    />

                    <Button
                        title="Recompensa"
                        onPress={() => { }}
                        backgroundColor={Colors.orange}
                        textColor={Colors.white}
                        borderColor={Colors.orange}
                        borderRadius={12}
                        width={335}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageColor: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    container: {
        padding: 20,
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
    buttonsContainer: {
        gap: 5,
    }
});
