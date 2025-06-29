import React, { useState } from 'react'; // 1. Importe o useState
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router'; // 2. Importe o router para navegação
import Icon from '../../../components/Icon';

// Tipos continuam os mesmos
type Seller = { id: string; name: string; schedule: string; };
type SellerItemProps = {
  seller: Seller;
  onEdit: () => void;   // Função para quando o botão de editar é clicado
  onRemove: () => void; // Função para quando o botão de remover é clicado
};

// Dados iniciais
const fairInfo = { name: 'FEIRA DA PRAÇA', schedule: 'De seg à sexta' };
const initialSellerList: Seller[] = [
  { id: '1', name: 'Farmers - Feira', schedule: 'Seg-Ter' },
  { id: '2', name: 'Churros', schedule: 'Seg-Quarta' },
  { id: '3', name: 'Pastel do Chef', schedule: 'Qua-Sex' },
  { id: '4', name: 'Faustino Caldo de Cana', schedule: 'Qui-Sab' },
];

// O componente SellerItem agora recebe as funções de clique como props
const SellerItem = ({ seller, onEdit, onRemove }: SellerItemProps) => (
  <View className="bg-white rounded-lg shadow-md mb-4 w-[48%] p-3 items-center">
    <View className="w-full h-24 bg-gray-200 rounded-md mb-3 flex items-center justify-center">
      <Icon name="Image" size={40} color="gray" />
    </View>
    <Text className="font-bold text-gray-800 text-center mb-1">{seller.name}</Text>
    <Text className="text-gray-600 text-center text-xs mb-3">{seller.schedule}</Text>
    <View className="flex-row justify-around w-full">
      {/* Botão de remover agora chama a função onRemove */}
      <TouchableOpacity onPress={onRemove} className="p-2">
        <Icon name="Trash" size={20} color="#dc2626" />
      </TouchableOpacity>
      {/* Botão de editar agora chama a função onEdit */}
      <TouchableOpacity onPress={onEdit} className="p-2">
        <Icon name="Pencil" size={20} color="#2563eb" />
      </TouchableOpacity>
    </View>
  </View>
);


export default function SellerProfileScreen() {
  // 3. A lista de feirantes agora é uma variável de estado
  const [sellers, setSellers] = useState(initialSellerList);

  // 4. Função para remover um feirante
  const handleRemoveSeller = (sellerToRemove: Seller) => {
    Alert.alert(
      "Confirmar Remoção",
      `Você tem certeza que deseja remover "${sellerToRemove.name}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => {
            // Filtra a lista, criando uma nova lista sem o item removido
            setSellers(currentSellers =>
              currentSellers.filter(seller => seller.id !== sellerToRemove.id)
            );
          },
        },
      ]
    );
  };

  return (
    <ScrollView className="flex-1" style={{ backgroundColor: '#F0E6D2' }}>
      {/* Cabeçalho da Feira não muda */}
      <View style={{ backgroundColor: '#BDCE82' }} className="w-full h-48 flex-row items-center justify-around p-4">
        <View className="bg-white/50 rounded-full w-24 h-24 items-center justify-center shadow-md">
          <Icon name="Store" size={48} color="white" />
        </View>
        <View className="flex-1 ml-4">
          <Text className="text-white font-bold text-2xl" style={{ textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 }}>{fairInfo.name}</Text>
          <Text className="text-white text-base" style={{ textShadowColor: 'rgba(0, 0, 0, 0.5)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 }}>{fairInfo.schedule}</Text>
        </View>
      </View>

      <View className="p-4">
        {/* 5. BOTÃO EDITAR CADASTRO AGORA NAVEGA PARA O FORMULÁRIO */}
        <TouchableOpacity
          onPress={() => router.push('/edit-fair-form')}
          className="bg-[#EBD380] py-3 rounded-lg items-center shadow-md"
        >
          <Text className="font-bold text-gray-800">Editar Cadastro</Text>
        </TouchableOpacity>

        <Text className="text-gray-700 font-bold mt-6 mb-3 text-lg">Feirantes na sua Feira</Text>

        <View className="flex-row flex-wrap justify-between">
          {/* 6. Mapeamos a lista de estado 'sellers' e passamos as funções para cada item */}
          {sellers.map(seller => (
            <SellerItem
              key={seller.id}
              seller={seller}
              onRemove={() => handleRemoveSeller(seller)}
              onEdit={() => router.push({ pathname: '/edit-seller-form', params: { id: seller.id }})}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}