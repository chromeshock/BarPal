import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECTION, {
  serverSelectionTimeoutMS: 5000, // 5 seconds timeout for initial connection
  socketTimeoutMS: 45000, // 45 seconds
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Use CORS middleware
app.use(cors());
app.use(express.json());

const barSchema = new mongoose.Schema({
  barName: String,
  location: String,
  zipcode: String,
  description: String,
  beverage: Array
});

const Bar = mongoose.model('Bar', barSchema);

app.get('/api/bars/by-zipcode', async (req, res) => {
  const { zipcode } = req.query;
  try {
    console.log(`Received request to search bars by zipcode: ${zipcode}`);
    const bars = await Bar.find({ zipcode: zipcode });
    console.log(`Bars found: ${bars.length}`);
    res.json(bars);
  } catch (error) {
    console.error('Error retrieving bars:', error);
    res.status(500).json({ message: 'Error retrieving bars: ' + error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
