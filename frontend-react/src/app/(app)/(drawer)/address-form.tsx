import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import Icon from '../../../components/Icon'; 

const savedAddresses = [
    { id: '1', title: 'Trabalho - Visual Software', street: 'Rua Jacarandá', number: '5566', neighborhood: 'Centro', city: 'Quedas do Iguaçu', complement: 'Próximo ao Centro de event...' },
    { id: '2', title: 'Casa - Sítio Morosini', street: 'Rua Jacarandá', number: '5566', neighborhood: 'Centro', city: 'Quedas do Iguaçu', complement: 'Próximo ao Centro de event...' },
];


type FormFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string; 
};

const FormField = ({ label, value, onChangeText, placeholder = '' }: FormFieldProps) => (
    <View className="mb-4">
        <Text className="text-sm font-bold text-gray-600 mb-1 ml-1">{label.toUpperCase()}</Text>
        <TextInput
            className="bg-white border border-gray-300 rounded-lg p-3 text-gray-800 text-base"
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
        />
    </View>
);

export default function AddressFormScreen() {
    const params = useLocalSearchParams();
    const addressId = params.id as string;
    const isEditing = !!addressId;

    const [title, setTitle] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');
    const [complement, setComplement] = useState('');

    useEffect(() => {
        if (isEditing) {
            const addressToEdit = savedAddresses.find(addr => addr.id === addressId);
            if (addressToEdit) {
                setTitle(addressToEdit.title);
                setStreet(addressToEdit.street);
                setNumber(addressToEdit.number);
                setNeighborhood(addressToEdit.neighborhood);
                setCity(addressToEdit.city);
                setComplement(addressToEdit.complement);
            }
        }
    }, [addressId]);

    const handleSave = () => {
        const message = isEditing ? "Endereço atualizado com sucesso!" : "Endereço criado com sucesso!";
        Alert.alert("Sucesso!", message);
        router.back();
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="flex-row items-center p-4 bg-white border-b border-gray-200">
                <TouchableOpacity onPress={() => router.back()} className="p-2">
                    <Icon name="ChevronLeft" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-gray-800 ml-4">
                    {isEditing ? 'Editar Endereço' : 'Novo Endereço'}
                </Text>
            </View>

            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <FormField label="Título do Endereço" value={title} onChangeText={setTitle} placeholder="Ex: Casa, Trabalho" />
                <FormField label="Rua" value={street} onChangeText={setStreet} placeholder="Ex: Rua das Flores" />
                <FormField label="Número" value={number} onChangeText={setNumber} />
                <FormField label="Bairro" value={neighborhood} onChangeText={setNeighborhood} />
                <FormField label="Cidade" value={city} onChangeText={setCity} />
                <FormField label="Complemento" value={complement} onChangeText={setComplement} placeholder="Ex: Apto 101, Bloco B" />
            </ScrollView>
            
            <View className="p-4 bg-white border-t border-gray-200">
                <TouchableOpacity
                    onPress={handleSave}
                    className="bg-primary-green3 py-4 rounded-lg"
                >
                    <Text className="text-white font-bold text-lg text-center">SALVAR ENDEREÇO</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}