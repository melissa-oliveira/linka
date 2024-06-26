import Header from "@/components/baseComponets/Header";
import React, { useState } from 'react';
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Input from "@/components/baseComponets/Input";
import Button from "@/components/baseComponets/Button";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ImageInput from "@/components/baseComponets/ImageInput";
import { router } from "expo-router";

export default function NewEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');
    const [nickname, setNickname] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighbour, setNeighbour] = useState('');
    const [role, setRole] = useState('');
    const [quantity, setQuantity] = useState('');

    return (
        <View style={styles.pageColor}>
            <Header
                userFirstName="Associação"
                userSurename="Betel"
                userProfileImageUrl="../../assets/images/profileImageAssociacaoBetel.png"
            />

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Novo Evento</Text>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: "screens/feed" })}
                        >
                            <Ionicons name="close-outline" size={28} color={Colors.red} style={styles.iconBack} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.subtitle}>Capa</Text>
                        <ImageInput />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Sobre</Text>
                        <View style={styles.divider} />

                        <View style={styles.inputContainer}>
                            <Input
                                label="Título"
                                value={title}
                                onChangeText={setTitle}
                                keyboardType="default"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Input
                                label="Descrição"
                                value={description}
                                onChangeText={setDescription}
                                keyboardType="default"
                            />
                        </View>

                        <View style={[styles.row, styles.spacingBottom]}>
                            <View style={styles.inputHalfContainer}>
                                <Input
                                    label="Data inicial"
                                    value={startDate}
                                    onChangeText={setStartDate}
                                    keyboardType="default"
                                />
                            </View>

                            <View style={styles.inputHalfContainer}>
                                <Input
                                    label="Hora inicial"
                                    value={startTime}
                                    onChangeText={setStartTime}
                                    keyboardType="default"
                                />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.inputHalfContainer}>
                                <Input
                                    label="Data Final"
                                    value={endDate}
                                    onChangeText={setEndDate}
                                    keyboardType="default"
                                />
                            </View>

                            <View style={styles.inputHalfContainer}>
                                <Input
                                    label="Hora final"
                                    value={endTime}
                                    onChangeText={setEndTime}
                                    keyboardType="default"
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.addressContainer}>
                            <Text style={styles.title}>Endereço</Text>
                            <TouchableOpacity>
                                <Text style={styles.selectExisting}>Selecionar existente</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.inputContainer}>
                            <Input
                                label="Apelido"
                                value={nickname}
                                onChangeText={setNickname}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="CEP"
                                value={cep}
                                onChangeText={setCep}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="Rua"
                                value={street}
                                onChangeText={setStreet}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="Número"
                                value={number}
                                onChangeText={setNumber}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="Estado"
                                value={state}
                                onChangeText={setState}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="Cidade"
                                value={city}
                                onChangeText={setCity}
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Input
                                label="Bairro"
                                value={neighbour}
                                onChangeText={setNeighbour}
                                keyboardType="default"
                            />
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Vagas</Text>
                        <View style={styles.divider} />
                    </View>

                    <View style={styles.row}>
                        <View style={styles.inputLargeContainer}>
                            <Input
                                label="Cargo"
                                value={role}
                                onChangeText={setRole}
                                keyboardType="default"
                            />
                        </View>

                        <View style={styles.inputSmallContainer}>
                            <Input
                                label="Quantidade"
                                value={quantity}
                                onChangeText={setQuantity}
                                keyboardType="numeric"
                            />
                        </View>
                        <TouchableOpacity style={styles.trashIcon}>
                            <Ionicons name="trash-outline" size={24} color={Colors.orange} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.addButtonContainer}>
                        <Ionicons name="add-outline" size={24} color={Colors.orange} />
                        <Text style={styles.addButton}>Adicionar</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonContainer}>
                        <Button
                            title="Publicar Evento"
                            onPress={() => { }}
                            backgroundColor={Colors.orange}
                            textColor={Colors.white}
                            borderColor={Colors.orange}
                            borderRadius={12}
                            width={335}
                        />
                        <Button
                            title="Cancelar"
                            onPress={() => router.push({ pathname: "screens/feed" })}
                            backgroundColor={Colors.white}
                            textColor={Colors.red}
                            borderColor={Colors.red}
                            borderRadius={12}
                            width={335}
                        />
                    </View>
                </View>
            </ScrollView>
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
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    iconBack: {
        marginEnd: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 10,
    },
    section: {
        marginBottom: 20,
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    divider: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputHalfContainer: {
        flex: 1,
        marginRight: 10,
    },
    spacingBottom: {
        marginBottom: 10,
    },
    inputLargeContainer: {
        flex: 0.7,
        marginRight: 10,
    },
    inputSmallContainer: {
        flex: 0.3,
    },
    addressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    selectExisting: {
        color: Colors.orange,
        fontSize: 12,
        alignSelf: 'flex-end',
        textDecorationLine: 'underline',
    },
    trashIcon: {
        alignSelf: 'flex-start',
        marginTop: 25,
        padding: 5,
    },
    addButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    addButton: {
        color: Colors.orange,
        fontSize: 15,
        marginLeft: 5,
    },
    buttonContainer: {
        marginTop: 30,
        alignItems: 'center',
        gap: 7,
    },
});
