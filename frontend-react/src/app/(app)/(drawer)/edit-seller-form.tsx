import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import Icon from '../../../components/Icon';

// --- A CORREÇÃO ESTÁ AQUI ---
type FormFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

const FormField = ({ label, value, onChangeText }: FormFieldProps) => (
    <View className="mb-4">
        <Text className="text-sm font-bold text-gray-600 mb-1 ml-1">{label.toUpperCase()}</Text>
        <TextInput
            className="bg-white border border-gray-300 rounded-lg p-3 text-gray-800 text-base"
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);
// --- FIM DA CORREÇÃO ---

const sellerList = [
    { id: '1', name: 'Farmers - Feira', schedule: 'Seg-Ter' },
    { id: '2', name: 'Churros', schedule: 'Seg-Quarta' },
    { id: '3', name: 'Pastel do Chef', schedule: 'Qua-Sex' },
    { id: '4', name: 'Faustino Caldo de Cana', schedule: 'Qui-Sab' },
];

export default function EditSellerFormScreen() {
    const params = useLocalSearchParams();
    const sellerId = params.id as string;

    const [name, setName] = useState('');
    const [schedule, setSchedule] = useState('');

    useEffect(() => {
        if (sellerId) {
            const sellerToEdit = sellerList.find(s => s.id === sellerId);
            if (sellerToEdit) {
                setName(sellerToEdit.name);
                setSchedule(sellerToEdit.schedule);
            }
        }
    }, [sellerId]);

    const handleSave = () => {
        Alert.alert("Sucesso!", `Dados de '${name}' atualizados.`);
        router.back();
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="flex-row items-center p-4 bg-white border-b border-gray-200">
                <TouchableOpacity onPress={() => router.back()} className="p-2">
                    <Icon name="ChevronLeft" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-gray-800 ml-4">Editar Feirante</Text>
            </View>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <FormField label="Nome do Feirante" value={name} onChangeText={setName} />
                <FormField label="Dias de Atuação" value={schedule} onChangeText={setSchedule} />
            </ScrollView>
            <View className="p-4 bg-white border-t border-gray-200">
                <TouchableOpacity onPress={handleSave} className="bg-primary-green3 py-4 rounded-lg">
                    <Text className="text-white font-bold text-lg text-center">SALVAR ALTERAÇÕES</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}