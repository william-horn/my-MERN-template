const { TestModel } = require('../models');

const resolvers = {
    Query: {
        getTest(_, args) {
            console.log('getTest args: ', args);
            return { 
                foo: 'testFoo', 
                bar: 'testBar', 
                baz: { 
                    keyOne: 'valueOne', 
                    keyTwo: 'valueTwo', 
                    keyThree: 'valueThree' 
                },
                response: {
                    message: 'get test was successful',
                    ok: true
                }
            }
        }
    },

    Mutation: {

    }
}

module.exports = resolvers;


