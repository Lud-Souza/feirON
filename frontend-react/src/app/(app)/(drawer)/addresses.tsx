import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { router } from 'expo-router'; // 👈 1. IMPORTE O 'router'
import Icon from '../../../components/Icon';

// Tipos e dados mock não mudam...
type Address = { id: string; title: string; street: string; number: string; neighborhood: string; city: string; complement: string; };
type AddressCardProps = { address: Address; };
const savedAddresses: Address[] = [
    { id: '1', title: 'Trabalho - Visual Software', street: 'Rua Jacarandá', number: '5566', neighborhood: 'Centro', city: 'Quedas do Iguaçu', complement: 'Próximo ao Centro de event...' },
    { id: '2', title: 'Casa - Sítio Morosini', street: 'Rua Jacarandá', number: '5566', neighborhood: 'Centro', city: 'Quedas do Iguaçu', complement: 'Próximo ao Centro de event...' },
];

const AddressCard = ({ address }: AddressCardProps) => (
  <View className="bg-[#BDCE82] p-4 rounded-lg shadow-md mb-5">
    {/* ...o visual do card não muda... */}
    <Text className="text-lg font-bold text-gray-800 mb-2">{address.title}</Text>
    <View className="flex-row justify-between mb-1">
      <Text className="text-gray-700">{address.street}</Text>
      <Text className="text-gray-700">Número {address.number}</Text>
    </View>
    <Text className="text-gray-700 mb-4">Complemento: {address.complement}</Text>
    
    <View className="flex-row justify-end gap-x-4">
      <TouchableOpacity className="bg-[#EBD380] py-2 px-8 rounded-full">
        <Text className="font-bold text-gray-800">Remover</Text>
      </TouchableOpacity>
      
      {/* 👇 2. BOTÃO EDITAR AGORA NAVEGA PARA O FORMULÁRIO 👇 */}
      <TouchableOpacity
        onPress={() => router.push({ pathname: '/address-form', params: { id: address.id } })}
        className="bg-[#EBD380] py-2 px-8 rounded-full"
      >
        <Text className="font-bold text-gray-800">Editar</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function AddressesScreen() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={require('../../../assets/images/fruits/frutasfundo.png')}
        resizeMode="cover"
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
          {savedAddresses.map(address => (
            <AddressCard key={address.id} address={address} />
          ))}
        </ScrollView>
        
        {/* 👇 3. BOTÃO ADICIONAR AGORA NAVEGA PARA O FORMULÁRIO 👇 */}
        <TouchableOpacity
          onPress={() => router.push('/address-form')} // Navega sem passar ID (modo de criação)
          className="absolute bottom-6 right-5 bg-[#EBD380] p-4 rounded-full shadow-lg"
        >
          <Icon name="Plus" size={28} color="#333" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}