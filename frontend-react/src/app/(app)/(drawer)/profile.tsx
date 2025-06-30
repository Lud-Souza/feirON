import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type ProfileInputProps = {
  label: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
};

const ProfileInput = ({ label, value, onChangeText, placeholder, secureTextEntry = false, editable = true }: ProfileInputProps) => (
  <View className="mb-4">
    <Text className="text-sm font-bold text-gray-600 mb-1 ml-1">{label}</Text>
    <TextInput
      className="bg-[#EBD380] rounded-lg p-3 text-gray-800 text-base"
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      editable={editable}
      placeholderTextColor="#A1820F"
    />
  </View>
);

export default function ProfileScreen() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSaveChanges = () => {
    Alert.alert("Sucesso", "Suas informações foram salvas!");
  };

  const handleCancel = () => {
    Alert.alert("Cancelado", "Nenhuma alteração foi salva.");
  };

  return (
    <View className="flex-1" style={{ backgroundColor: '#F7F6F1' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="mb-4">
          <Text className="text-sm font-bold text-gray-600 mb-1 ml-1">TIPO CADASTRO</Text>
          <View className="bg-[#BDCE82] rounded-lg p-3 flex-row justify-between items-center">
            <Text className="text-gray-800 text-base font-semibold">NORMAL</Text>
            <FontAwesome name="chevron-down" size={16} color="#555" />
          </View>
        </View>

        <ProfileInput label="NOME" value={nome} onChangeText={setNome} />

        <ProfileInput label="CPF" value={cpf} onChangeText={setCpf} />

        <ProfileInput label="TELEFONE" value={telefone} onChangeText={setTelefone} />
        
        <ProfileInput label="EMAIL" value={email} onChangeText={setEmail} />

        <ProfileInput label="SENHA" value="********" editable={false} />
        
        <ProfileInput
          label="ALTERAR SENHA"
          value={novaSenha}
          onChangeText={setNovaSenha}
          secureTextEntry
          placeholder="Digite a nova senha"
        />
        <ProfileInput
          label="CONFIRMAR SENHA"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          placeholder="Confirme a nova senha"
        />

        <View className="flex-row justify-between mt-6">
          <TouchableOpacity
            onPress={handleCancel}
            className="bg-gray-200 py-3 px-12 rounded-lg"
          >
            <Text className="font-bold text-gray-600">Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSaveChanges}
            className="bg-[#EBD380] py-3 px-12 rounded-lg"
          >
            <Text className="font-bold text-gray-800">Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}