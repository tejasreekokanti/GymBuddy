const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
  day: String,
  meals: [String],
});
module.exports = mongoose.model('Meal', MealSchema);
