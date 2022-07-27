const { gql } = require("apollo-server-express");

const typeDefs = gql`

    type Response {
        message: String
        ok: Boolean
    }

    type BazObject {
        keyOne: String
        keyTwo: String
        keyThree: String 
    }

    type TestResult {
        foo: String
        bar: String
        baz: BazObject
    }

    input TestInput {
        bar: String
        baz: BazObject
    }

    type Query {
        getTest: TestResult
    }

    type Mutation {
        postTest(foo: String, inputPayload: TestInput): Response
    }

`;

export default typeDefs;
