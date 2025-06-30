import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "../../../components/CustomDrawerContent";
import AppHeader from "../../../components/AppHeader";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="index"
        options={{
          header: ({ navigation }) => (
            <AppHeader title="PRODUTOS" navigation={navigation} />
          ),
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="cart"
        options={{
          header: ({ navigation }) => (
            <AppHeader title="CARRINHO" navigation={navigation} />
          ),
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="order" 
        options={{
          header: ({ navigation }) => (
            <AppHeader title="MEUS PEDIDOS" navigation={navigation} />
          ),
          headerShown: true,
        }}
      />
      
      <Drawer.Screen
        name="favorites"
        options={{
          header: ({ navigation }) => (
            <AppHeader title="FAVORITOS" navigation={navigation} />
          ),
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="addresses"
        options={{
          header: ({ navigation }) => (
            <AppHeader title="MEUS ENDEREÇOS" navigation={navigation} />
          ),
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          header: ({ navigation }) => (
            <AppHeader title="PERFIL PESSOAL" navigation={navigation} />
          ),
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="fair-profile"
        options={{
          header: ({ navigation }) => (
            <AppHeader title="PERFIL DA FEIRA" navigation={navigation} />
          ),
          headerShown: true,
        }}
      />

      <Drawer.Screen name="seller" options={{ drawerItemStyle: { display: 'none' } }}/>
      <Drawer.Screen name="fairs" options={{ drawerItemStyle: { display: 'none' } }}/>
      <Drawer.Screen name="address-form" options={{ drawerItemStyle: { display: 'none' } }}/>
      <Drawer.Screen name="edit-fair-form" options={{ drawerItemStyle: { display: 'none' } }}/>
      <Drawer.Screen name="edit-seller-form" options={{ drawerItemStyle: { display: 'none' } }}/>
    </Drawer>
  );
}