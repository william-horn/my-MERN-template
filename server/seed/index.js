
// Get command-line args
const seedArg = process.argv[2];

// Import models
const {
    TestModel
} = require('../models');

// Require seed data
const testData = require('./test.json');


// Declare seed planters
const plantTestData = async () => {
    await TestModel.deleteMany({});
    await TestModel.create(testData);
    console.log('Planted test data');
}


const plantAll = async () => {
    await plantTestData();
    console.log('Planted all seeds');
}

// Package all seed planters
const seedFuncs = {
    plantTestData,
    plantAll
}

// npm run seed all
// npm run seed testData
if (seedArg) seedFuncs[seedArg]();