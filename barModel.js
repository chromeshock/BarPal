import mongoose from "mongoose";

const barSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    description: String,
    zipcode: String,
    // Include any other fields as necessary
});

const Bar = mongoose.model('Bar', barSchema, 'PalList');  // Explicitly setting the collection name


export default Bar;
