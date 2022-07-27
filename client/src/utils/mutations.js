import { gql } from "@apollo/client";


export const POST_TEST = gql`
    mutation postTest($foo: String, $inputPayload: TestInput) {
        postTest(foo: $foo, inputPayload: $inputPayload) {
            message
            ok
        }
    }
`