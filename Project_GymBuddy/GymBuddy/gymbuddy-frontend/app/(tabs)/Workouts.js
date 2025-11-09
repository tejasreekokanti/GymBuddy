import { View, Text, StyleSheet, FlatList, Button, ActivityIndicator, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newWorkout, setNewWorkout] = useState('');

  const API = 'https://potential-carnival-w6g4qw45qg63wg4-5000.app.github.dev/api/workouts';

  const fetchWorkouts = async () => {
    try {
      const res = await axios.get(API);
      setWorkouts(res.data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const addWorkout = async () => {
    if (!newWorkout.trim()) return;
    try {
      const res = await axios.post(API, { name: newWorkout });
      setWorkouts([...workouts, res.data]);
      setNewWorkout('');
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 50 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout List 🏋️</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      <TextInput
        placeholder="Workout name"
        value={newWorkout}
        onChangeText={setNewWorkout}
        style={styles.input}
      />
      <Button title="Add Workout" onPress={addWorkout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 10, fontSize: 18, backgroundColor: '#eee', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});
