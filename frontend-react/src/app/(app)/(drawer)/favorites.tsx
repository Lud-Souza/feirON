import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Icon from '../../../components/Icon';

// --- Tipos e Dados de Exemplo ---
type Product = {
  id: number;
  title: string;
  price: string;
  unit: string;
  image: any;
};

type ProductCardProps = {
  product: Product;
  onRemove: (id: number) => void; // Função para remover o item
};

// Dados iniciais dos itens favoritados
const initialFavoriteItems: Product[] = [
  { id: 1, title: "Tábua de carne - artesanal", price: "R$ 245,99", unit: "un", image: require("../../../assets/images/fruits/tabuaDeCarne.jpg") },
  { id: 2, title: "Cenoura", price: "R$ 245,99", unit: "kg", image: require("../../../assets/images/fruits/cenoura.jpg") },
  { id: 3, title: "Tomate tradicional", price: "R$ 245,99", unit: "kg", image: require("../../../assets/images/fruits/tomate.jpg") },
  { id: 4, title: "Abóbora cabotia", price: "R$ 7,99", unit: "kg", image: require("../../../assets/images/fruits/abobora.png") },
  { id: 5, title: "Abacate verde", price: "R$ 245,99", unit: "kg", image: require("../../../assets/images/fruits/abacate.png") },
  { id: 6, title: "Vasilhas de barro", price: "R$ 7,99", unit: "kg", image: require("../../../assets/images/fruits/vasilha.png") },
];

// --- Componente para o Card de Produto Favoritado ---
const FavoriteProductCard = ({ product, onRemove }: ProductCardProps) => (
  <View className="w-[48%] bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
    <Image source={product.image} className="w-full h-28" resizeMode="cover" />
    <View className="p-2">
      <Text className="font-semibold text-sm">{product.title}</Text>
      <View className="flex-row justify-between items-center mt-1">
        <Text className="text-primary-green3 font-semibold text-sm">
          {product.price} <Text className="text-xs">/{product.unit}</Text>
        </Text>
        <View className="flex-row gap-2">
          <TouchableOpacity onPress={() => alert(`Adicionar '${product.title}' ao carrinho!`)}>
            <Icon name="ShoppingCart" color="black" size={16} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemove(product.id)}>
            <FontAwesome name="heart" size={16} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);


// --- Tela Principal de Favoritos ---
export default function FavoritesScreen() {
  // A lista de favoritos agora é um estado, para podermos remover itens
  const [favoriteItems, setFavoriteItems] = useState(initialFavoriteItems);

  // Função para remover um favorito
  const handleRemoveFavorite = (productId: number) => {
    Alert.alert(
      "Remover Favorito",
      "Tem certeza que deseja remover este item dos seus favoritos?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => {
            setFavoriteItems(currentItems =>
              currentItems.filter(item => item.id !== productId)
            );
          },
        },
      ]
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* Filtro de Tipo de Produtos */}
      <View className="p-4 bg-white border-b border-gray-200">
        <Text className="text-sm font-bold text-gray-600 mb-1 ml-1">Tipos de produtos</Text>
        <View className="bg-white border border-gray-300 rounded-md p-3 flex-row justify-between items-center">
          <Text className="text-base text-gray-800">TODOS</Text>
          <FontAwesome name="chevron-down" size={16} color="#555" />
        </View>
      </View>

      {/* Grade de Produtos Favoritados */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="flex-row flex-wrap justify-between">
          {favoriteItems.map(item => (
            <FavoriteProductCard
              key={item.id}
              product={item}
              onRemove={handleRemoveFavorite}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}