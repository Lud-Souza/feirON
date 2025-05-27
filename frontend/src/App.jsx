import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { View, Text, Image, Pressable, Linking, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => Linking.openURL('https://vite.dev')}>
        <Image
          source={require('./assets/vite.svg')}
          
        />
      </Pressable>

      <Pressable onPress={() => Linking.openURL('https://react.dev')}>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.logo}
        />
      </Pressable>

      <Text style={styles.title}>Vite + React Native</Text>

      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>count is {count}</Text>
      </Pressable>

      <Text style={styles.text}>
        Edit <Text style={styles.code}>App.js</Text> and save to test HMR
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 100, height: 100, margin: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  button: {
    backgroundColor: '#646cff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  buttonText: { color: '#fff', fontSize: 16 },
  text: { textAlign: 'center', paddingHorizontal: 20 },
  code: { fontFamily: 'monospace', backgroundColor: '#eee' }
});
