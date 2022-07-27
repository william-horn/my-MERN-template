const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Response {
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

    type TestResult {
        foo: String
        bar: String
        baz: BazOut
    }

    input TestInput {
        bar: String
        baz: BazIn
    }

    type Query {
        getTest: TestResult
    }

    type Mutation {
        postTest(foo: String, inputPayload: TestInput): Response
    }

`;

module.exports = typeDefs;