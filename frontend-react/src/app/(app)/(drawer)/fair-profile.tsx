import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import Icon from '../../../components/Icon';

// 1. A importação do useCart foi REMOVIDA.

// --- Tipos para o TypeScript ---
type Product = {
  id: string;
  title: string;
  price: string;
};

type ProductCardProps = {
  product: Product;
};

// --- Dados de Exemplo (Mock Data) ---
const fairProfileData = {
  name: 'VEGETABLES',
  schedule: 'De seg à sexta',
};

const fairProducts: Product[] = [
  { id: '3', title: 'Tomate tradicional', price: 'R$ 245,99 kg' },
  { id: '4', title: 'Abobora cabotia', price: 'R$ 7,99 kg' },
  { id: '5', title: 'Abacate verde', price: 'R$ 245,99 kg' },
  { id: '6', title: 'Vasilhas de barro', price: 'R$ 7,99 kg' },
];

// --- Componente Reutilizável para o Card de Produto ---
const ProductCard = ({ product }: ProductCardProps) => {
  // 2. A chamada const { addToCart } = useCart(); foi REMOVIDA.

  return (
    <View className="w-[48%] bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
      {/* Placeholder para a imagem do produto */}
      <View className="w-full h-28 bg-gray-200 flex items-center justify-center">
        <Icon name="Image" size={40} color="gray" />
      </View>
      <View className="p-2">
        <Text className="font-semibold text-sm">{product.title}</Text>
        <View className="flex-row justify-between items-center mt-1">
          <Text className="text-primary-green3 font-semibold text-sm">{product.price}</Text>
          <View className="flex-row gap-2">
            {/* 3. A AÇÃO DO BOTÃO foi trocada por um alerta */}
            <TouchableOpacity onPress={() => alert(`Adicionar '${product.title}' ao carrinho!`)}>
              <Icon name="ShoppingCart" color="black" size={16} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert(`Favoritar '${product.title}'!`)}>
              <FontAwesome name="heart-o" size={16} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};


// --- Tela Principal ---
export default function FairProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F0E6D2]">
      {/* Seção do Banner */}
      <View style={{ backgroundColor: '#BDCE82' }} className="w-full h-40 justify-center">
        <View className="flex-row items-center p-4">
          <View className="w-24 h-24 rounded-full bg-white/50 items-center justify-center shadow-md">
            <Icon name="Store" size={48} color="white" />
          </View>
          <View className="ml-4">
            <Text className="text-white font-extrabold text-2xl" style={{ textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5 }}>
              {fairProfileData.name}
            </Text>
            <Text className="text-white font-semibold" style={{ textShadowColor: 'rgba(0, 0, 0, 0.7)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 }}>
              {fairProfileData.schedule}
            </Text>
          </View>
        </View>
      </View>

      {/* Seção de Conteúdo (Botão e Grade de Produtos) */}
      <View className="p-4">
        <TouchableOpacity 
          onPress={() => router.push('/fairs')}
          className="bg-[#EBD380] py-3 rounded-lg items-center shadow-md w-full mb-6"
        >
          <Text className="font-bold text-gray-800">Feiras</Text>
        </TouchableOpacity>

        <View className="flex-row flex-wrap justify-between">
          {fairProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}