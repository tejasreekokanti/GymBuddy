import React from 'react';
import { View, Text, Image, StyleSheet, Button, Dimensions } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ Correct import for expo-router
import { LineChart } from 'react-native-chart-kit';

const Home = () => {
  const router = useRouter(); // ✅ Not useNavigation()

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [30, 45, 40, 50, 20, 60, 35],
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GymBuddy 🏋️‍♂️</Text>

      <Image
        source={require('../../assets/fitness-home.png')}
        style={styles.image}
      />

      <Text style={styles.quote}>
        “Push yourself, because no one else is going to do it for you.”
      </Text>

      <Text style={styles.graphTitle}>Weekly Workout Time (minutes)</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={styles.graph}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Workout Plans"
          onPress={() => router.push('/Workouts')} // ✅ Push to route
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Nutrition Planner"
          onPress={() => router.push('/Nutrition')} // ✅ Push to route
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Settings"
          onPress={() => router.push('/Settings')} // ✅ Push to route
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  graph: {
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
  },
});
