

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Test from './global-components/Test';

function App() {
    return (
        <BrowserRouter>
            <Test/>
        </BrowserRouter>    
    );
}

export default App;
