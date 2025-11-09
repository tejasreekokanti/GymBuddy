import { Slot, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkLogin = async () => {
      // Always reset login state on app start
      await AsyncStorage.setItem('isLoggedIn', 'false');

      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedIn === 'true');
      setLoading(false);
    };

    checkLogin();
  }, []);

  useEffect(() => {
    if (!loading && isLoggedIn === false) {
      router.replace('/login');
    }
  }, [loading, isLoggedIn]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
