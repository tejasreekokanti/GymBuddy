import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const dietPlan = {
  Monday: ['Breakfast: Oatmeal with banana', 'Lunch: Grilled chicken salad', 'Dinner: Baked salmon with veggies'],
  Tuesday: ['Breakfast: Greek yogurt with berries', 'Lunch: Turkey sandwich on whole grain bread', 'Dinner: Stir-fried tofu with brown rice'],
  Wednesday: ['Breakfast: Smoothie with spinach, banana, and protein powder', 'Lunch: Quinoa salad with chickpeas', 'Dinner: Chicken and broccoli'],
  Thursday: ['Breakfast: Scrambled eggs with toast', 'Lunch: Lentil soup and side salad', 'Dinner: Grilled shrimp and sweet potatoes'],
  Friday: ['Breakfast: Peanut butter toast with apple', 'Lunch: Tuna salad wrap', 'Dinner: Turkey meatballs with whole wheat pasta'],
  Saturday: ['Breakfast: Protein pancakes with berries', 'Lunch: Grilled cheese and tomato soup', 'Dinner: Veggie stir-fry with tofu'],
  Sunday: ['Breakfast: Avocado toast with eggs', 'Lunch: Chicken Caesar salad', 'Dinner: Grilled fish with quinoa and veggies'],
};

export default function NutritionPlanner() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Weekly Diet Planner</Text>
      {Object.entries(dietPlan).map(([day, meals]) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{day}</Text>
          {meals.map((meal, index) => (
            <Text key={index} style={styles.meal}>{meal}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  dayContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  dayTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  meal: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});
