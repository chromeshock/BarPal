import express from 'express';
import { getBar, createBar, deleteBar, updateBar } from '../controllers/barController.js';
import Bar from '../models/barModel.js'


// Bar API Endpoints

const barRouter = express.Router();

 //fetches all bars
barRouter.get('/', async(req, res) => {
    try {
        const bars = await Bar.find({});
        res.json(bars);
    } catch (error) {
        console.error("Error retrieving bars:", error);
        res.status(500).json({message: "Error retrieving bars:" + error.message });
    }
});

// Fetch a single bar by ID
barRouter.get('/:id', async (req, res) => {
    const id = req.params.id.trim();
    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }
    try {
        const bar = await Bar.findById(id);
        if (!bar) {
            console.log("No bar found with ID:", id);
            return res.status(404).json({ message: 'Bar not found' });
        }
        res.json(bar);
    } catch (error) {
        console.error("Error retrieving bar:", error);
        res.status(500).json({ message: 'Error retrieving bar: ' + error.message });
    }
});

//crud operations
barRouter.post('/', createBar); 
barRouter.delete('/:id', deleteBar); 
barRouter.put('/:id', updateBar); 
barRouter

export default barRouter;
console.log(Bar); // This should output the model function if everything is correct
