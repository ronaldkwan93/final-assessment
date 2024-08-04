const mongoose = require('mongoose');

// Define the schema
const salarySchema = new mongoose.Schema({
    name: String, 
    Average: String,
    Starting: Number
});

// Create the model
const salaryModel = mongoose.model("salary", salarySchema);  // Adjusted to "salary"

// Export the model
module.exports = salaryModel;
