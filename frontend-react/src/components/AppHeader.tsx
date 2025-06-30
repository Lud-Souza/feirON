import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import Icon from './Icon';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; // 👈 1. Importamos o hook

// A interface das propriedades não muda
interface AppHeaderProps {
  title: string;
  navigation: any;
}

export default function AppHeader({ title, navigation }: AppHeaderProps) {
  // 2. Pegamos os valores da área segura. O 'insets.top' nos dá a altura da barra de status.
  const insets = useSafeAreaInsets();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    // 3. Aplicamos o espaçamento do topo no estilo da View principal.
    //    Isso "empurra" o conteúdo do cabeçalho para baixo, para fora da barra de status.
    <View
      style={{ 
        backgroundColor: "#EBD380",
        paddingTop: insets.top, // A MÁGICA ACONTECE AQUI
      }}
      className="w-full px-4 py-3 flex-row items-center justify-between shadow-md"
    >
      {/* O resto do componente não muda */}
      <TouchableOpacity onPress={openDrawer} className="p-2">
        <Icon name="Menu" size={28} color="#333" />
      </TouchableOpacity>

      <Text className="text-xl font-bold text-gray-800">{title}</Text>

      <TouchableOpacity className="p-2">
      </TouchableOpacity>
    </View>
  );
}