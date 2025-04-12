
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({
  name: String,
  dob: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', UserSchema);

app.post('/api/register', async (req, res) => {
  const { name, dob, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, dob, email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, 'secretkey');
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ error: 'User already exists' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: 'User not found' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, 'secretkey');
  res.json({ token, user });
});

app.listen(5000, () => console.log('Server running on port 5000'));
