import Bar from '../models/barModel.js';

export const getBar = async(req, res) => {
    try {
        const bar = await Bar.findById(req.params.id);
        if (!bar) {
            return res.status(404).send(`message: 'Bar not found'`);
        }
        res.json(bar);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBar = async(req, res) => {
    const bar = new Bar(req.body);
    try {
        const newBar = await bar.save();
        res.status(201).json(newBar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteBar = async (req, res) => {
    try {
        const deletedBar = await Bar.findByIdAndDelete(req.params.id);
        if (!deletedBar) {
            return res.status(404).json({ message: 'Bar not found' });
        }
        res.status(204).send(); // 204 No Content is often used for successful deletes
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateBar = async(req, res) => {
    try {
        const updatedBar = await Bar.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidation: true });
        if (!updateBar) {
            return res.status(404).json({ message: 'Bar not found'});
        }
        res.json(updatedBar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};