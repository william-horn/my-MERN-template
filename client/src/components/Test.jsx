
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TEST } from '../utils/queries';
import { POST_TEST } from '../utils/mutations';

const Test = () => {

    /* Test GQL requests start */
    const { data: testData, loading: loadingTestData } = useQuery(GET_TEST, {
        variables: { foo: 'foo var' }
    });

    if (loadingTestData) {
        console.log('loading...');
        return;
    }

    console.log('got test data: ', testData);
    /* Test GQL requests end */

    return (
        <div>
            <p>This is a test</p>
        </div>
    );
}

export default Test;

