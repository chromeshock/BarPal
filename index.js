import express from 'express';
import mongoose from 'mongoose';
import barRouter from './routes/barRoutes.js';
import articleRouter from './routes/articleRoutes.js' 
import commentRouter from './routes/commentRoutes.js';  

const app = express();
const port = 3000;

app.use(express.json()); // Middleware for parsing JSON bodies



// MongoDB connection
/*connect('mongodb://127.0.0.1:27017/barPal', {
  
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
*/

console.log('Connecting to MongoDB...');
mongoose.connect('mongodb://127.0.0.1:27017/BarPal')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB:', err));


// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/bars', barRouter);
app.use('/api/articles', articleRouter);
app.use('/api/comments', commentRouter);

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}).on('error', () => {
  console.error('Failed to start server:', err);
});
