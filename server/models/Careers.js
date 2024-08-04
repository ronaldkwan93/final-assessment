const mongoose = require('mongoose');

// Define the schema
const CareerSchema = new mongoose.Schema({
    name: String, 
    discipline: String,
    studyYears: Number
});

// Create the model
const CareerModel = mongoose.model("Career", CareerSchema);  // Adjusted to "Career"

// Export the model
module.exports = CareerModel;
