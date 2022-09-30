import { gql } from "@apollo/client";

export const GET_TEST = gql`
    query getTest($foo: String) {
        getTest(foo: $foo) {
            foo
            bar
            baz {
                keyOne
                keyTwo
                keyThree
            }
            response {
                message
                ok
            }
        }
    }
`;


