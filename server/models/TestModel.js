
const mongoose = require("mongoose");

const TestModel = mongoose.Schema({

    foo: {
        type: String
    },

    bar: {
        type: String
    },

    baz: {
        keyOne: String,
        keyTwo: String,
        keyThree: String
    }

});

module.exports = mongoose.model('TestModel', TestModel);
