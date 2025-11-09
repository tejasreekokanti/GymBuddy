const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  password: String, // Note: In real apps, hash passwords before storing
  preferences: {
    darkMode: { type: Boolean, default: false },
    notifications: { type: Boolean, default: true },
    language: { type: String, default: 'English' },
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
