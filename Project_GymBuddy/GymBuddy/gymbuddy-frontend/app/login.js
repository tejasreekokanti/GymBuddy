import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('password');

  const handleLogin = async () => {
    if (username === 'Admin' && password === 'password') {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      router.replace('/(tabs)/Home');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      {/* Icon Image */}
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      
      <Text style={styles.title}>Welcome</Text>
      
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
  },
});
