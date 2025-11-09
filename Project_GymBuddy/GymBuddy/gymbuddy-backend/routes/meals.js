const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// Get all meals
router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new meal plan
router.post('/', async (req, res) => {
  try {
    const meal = new Meal(req.body);
    await meal.save();
    res.status(201).json(meal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a meal plan
router.put('/:id', async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(meal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a meal plan
router.delete('/:id', async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Meal plan deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
