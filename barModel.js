import mongoose from "mongoose";

const barSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Bar name is required'], 
        trim: true, 
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [100, 'Name must be less than 100 characters']
    },
    location: {
        type: String, 
        trim: true
    },
    description: {
        type: String, 
        trim: true,
        maxlength: [500, 'Description must be less than 500 characters']
    },
    zipcode: {
        type: String,
        match: [/^\d{5}(-\d{4})?$/, 'Please enter a valid zipcode'] // Example for US zip codes
    },
    // Add any other fields with appropriate validation
});

const Bar = mongoose.model('Bar', barSchema, 'PalList');  // Explicitly setting the collection name

export default Bar;
