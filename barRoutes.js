import express from 'express';
import { createBar, deleteBar, updateBar } from '../controllers/barController.js';
import Bar from '../models/barModel.js'


// Bar API Endpoints

const barRouter = express.Router();


//fetch by zipcode
barRouter.get('/by-zipcode', async (req, res) => {
    const { zipcode, name } = req.query;
    try {
        console.log("Incoming Query Parameters:", req.query);

        let query = {};
        if (zipcode) query.zipcode = zipcode;
        if (name) query.name = { $regex: name, $options: 'i' }; // Case-insensitive partial match

        console.log("Constructed Query:", query); // Log the query being used

        const bars = await Bar.find(query);
        console.log("Query Result:", bars);

        if (bars.length === 0) {
            return res.status(404).json({ message: 'No bars found matching criteria' });
        }
        res.json(bars);
    } catch (error) {
        console.error("Error retrieving bars:", error);
        res.status(500).json({ message: 'Error retrieving bars: ' + error.message });
    }
});


// Fetch a single bar by ID
barRouter.get('/:id', async (req, res) => {
    const id = req.params.id.trim();
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

 //fetches all bars with pagination
barRouter.get('/', async(req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    try {
        const bars = await Bar.find().limit(limit).skip(startIndex);
        const total = await Bar.countDocuments();
        res.json({
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            bars
        });
    } catch (error) {
        console.error("Error retrieving bars:", error);
        res.status(500).json({message: "Error retrieving bars:" + error.message });
    }
});

//crud operations
barRouter.post('/', createBar); 
barRouter.delete('/:id', deleteBar); 
barRouter.put('/:id', updateBar); 

export default barRouter;
console.log(Bar); // This should output the model function if everything is correct
