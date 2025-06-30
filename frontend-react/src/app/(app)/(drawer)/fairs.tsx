import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Icon from '../../../components/Icon';

// --- Tipos e Dados de Exemplo (sem imagens) ---
type Fair = {
  id: string;
  name: string;
  address: string;
  days: { dom: boolean; seg: boolean; ter: boolean; qua: boolean; qui: boolean; sex: boolean; sab: boolean; };
};

const linkedFairs: Fair[] = [
  {
    id: '1',
    name: 'FEIRA DA PRAÇA',
    address: 'Endereço: Av. Ipê, Centro, N° 345, Próximo ao restaurante Querencia',
    days: { dom: false, seg: true, ter: true, qua: true, qui: true, sex: true, sab: false },
  },
];

// Componente DayCheckbox não muda
const DayCheckbox = ({ day, isChecked }: { day: string, isChecked: boolean }) => (
  <View className="items-center">
    <View className={`w-6 h-6 rounded border-2 ${isChecked ? 'bg-[#BDCE82] border-[#a5b86b]' : 'bg-white/50 border-gray-400'}`} />
    <Text className="text-gray-700 font-semibold mt-1">{day}</Text>
  </View>
);

// Componente para o Card da Feira (sem a imagem)
const FairCard = ({ fair }: { fair: Fair }) => (
  <View className="bg-[#BDCE82] p-4 rounded-xl shadow-md mb-6">
    <View className="flex-row items-center mb-4">
      {/* Placeholder para a logo da feira */}
      <View className="w-20 h-20 rounded-full bg-white/70 items-center justify-center mr-4 border-2 border-white">
        <Icon name="Store" size={40} color="#555" />
      </View>
      <View className="flex-1">
        <Text className="text-xl font-bold text-gray-800">{fair.name}</Text>
        <Text className="text-sm text-gray-700 mt-1">{fair.address}</Text>
      </View>
    </View>

    {/* O resto do card não muda */}
    <View className="flex-row justify-around mb-4">
      <DayCheckbox day="Dom" isChecked={fair.days.dom} />
      <DayCheckbox day="Seg" isChecked={fair.days.seg} />
      <DayCheckbox day="Ter" isChecked={fair.days.ter} />
      <DayCheckbox day="Qua" isChecked={fair.days.qua} />
      <DayCheckbox day="Qui" isChecked={fair.days.qui} />
    </View>
    <View className="flex-row justify-start gap-x-12 ml-8 mb-4">
      <DayCheckbox day="Sex" isChecked={fair.days.sex} />
      <DayCheckbox day="Sab" isChecked={fair.days.sab} />
    </View>
    <TouchableOpacity
      onPress={() => alert(`Remover vínculo com ${fair.name}`)}
      className="bg-[#EBD380] py-3 rounded-full items-center"
    >
      <Text className="font-bold text-gray-800">Remover</Text>
    </TouchableOpacity>
  </View>
);

export default function FairsScreen() {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1" style={{ backgroundColor: '#F0E6D2' }}>
        <View className="flex-row items-center p-4 bg-transparent justify-between">
            <TouchableOpacity onPress={() => router.canGoBack() ? router.back() : router.push('/')} className="p-2 bg-[#EBD380]/80 rounded-lg">
                <Icon name="Menu" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-xl font-bold text-gray-800">FEIRAS</Text>
            <TouchableOpacity className="p-2 bg-[#EBD380]/80 rounded-lg">
                <Icon name="Search" size={24} color="black" />
            </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {linkedFairs.map(fair => (
              <FairCard key={fair.id} fair={fair} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}