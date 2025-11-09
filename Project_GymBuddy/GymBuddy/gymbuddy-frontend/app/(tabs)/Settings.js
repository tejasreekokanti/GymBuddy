import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Image, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // for navigation

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out successfully.', [
      {
        text: 'OK',
        onPress: async () => {
          router.replace('/login');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings ⚙️</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/user.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Admin</Text>
          <Text style={styles.email}>admin@example.com</Text>
        </View>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Language</Text>
        <Text style={styles.settingValue}>English</Text>
      </View>

      <View style={styles.logoutButton}>
        <Button title="Log Out" color="#FF3B30" onPress={handleLogout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    gap: 15,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  settingLabel: {
    fontSize: 18,
    color: '#333',
  },
  settingValue: {
    fontSize: 16,
    color: '#666',
  },
  logoutButton: {
    marginTop: 40,
  },
});
