const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type ResponseOut {
        message: String
        ok: Boolean
    }

    type BazOut {
        keyOne: String
        keyTwo: String
        keyThree: String 
    }

    input BazIn {
        keyOne: String
        keyTwo: String
        keyThree: String
    }

    type TestOut {
        foo: String
        bar: String
        baz: BazOut
        response: ResponseOut
    }

    input TestIn {
        bar: String
        baz: BazIn
    }

    type Query {
        getTest(foo: String): TestOut
    }

    type Mutation {
        postTest(foo: String, inputPayload: TestIn): ResponseOut
    }

`;

module.exports = typeDefs;