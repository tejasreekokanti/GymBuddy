const mongoose = require('mongoose');
const WorkoutSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  reps: Number,
});
module.exports = mongoose.model('Workout', WorkoutSchema);
