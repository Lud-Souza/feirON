import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Icon from '../../../components/Icon';

// --- A CORREÇÃO ESTÁ AQUI ---
// 1. Criamos um "molde" (type) para as propriedades do FormField
type FormFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

// 2. Aplicamos o "molde" ao componente
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

const fairInfo = { name: 'FEIRA DA PRAÇA', schedule: 'De seg à sexta' };

export default function EditFairFormScreen() {
    const [name, setName] = useState('');
    const [schedule, setSchedule] = useState('');

    useEffect(() => {
        setName(fairInfo.name);
        setSchedule(fairInfo.schedule);
    }, []);

    const handleSave = () => {
        Alert.alert("Sucesso!", "Dados da feira atualizados.");
        router.back();
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <View className="flex-row items-center p-4 bg-white border-b border-gray-200">
                <TouchableOpacity onPress={() => router.back()} className="p-2">
                    <Icon name="ChevronLeft" size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-gray-800 ml-4">Editar Cadastro da Feira</Text>
            </View>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                <FormField label="Nome da Feira" value={name} onChangeText={setName} />
                <FormField label="Horário de Funcionamento" value={schedule} onChangeText={setSchedule} />
            </ScrollView>
            <View className="p-4 bg-white border-t border-gray-200">
                <TouchableOpacity onPress={handleSave} className="bg-primary-green3 py-4 rounded-lg">
                    <Text className="text-white font-bold text-lg text-center">SALVAR ALTERAÇÕES</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}