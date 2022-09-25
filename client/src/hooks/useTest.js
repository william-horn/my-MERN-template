
import React, { useEffect, useState } from 'react';
import themes from '../themes.json';
import Enum from '../enums';

const useTest = (initial) => {
    const [state, setState] = useState(initial);
    

    return [state, setState];
}

export default useTest;

