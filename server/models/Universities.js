const mongoose = require('mongoose');

// Define the schema
const UniversitiesSchema = new mongoose.Schema({
    name: String, 
    description: String,
    location: String
});

// Create the model
const UniModel = mongoose.model("Universities", UniversitiesSchema);  // Adjusted to "Career"

// Export the model
module.exports = UniModel;
