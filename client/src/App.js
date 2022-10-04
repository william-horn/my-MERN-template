/*
==========
| CLIENT |
==================================================================================================================================

? @author:          William J. Horn
? @doc-name:        App.js
? @doc-created:     09/20/2022

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

npm installs:
-------------
npm i react-router-dom graphql @apollo/client styled-components


==================================================================================================================================

? @doc-todo
=================
| DOCUMENT TODO |
==================================================================================================================================

==================================================================================================================================
*/

/* ---------------- */
/* Import Internals */
/* ---------------- */
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import AppProvider from './providers/AppProvider';
import themes from './themes.json';
import Test from './components/Test';
import Enum from './enums';


// Redux
// import { useSelector, useDispatch } from 'react-redux';
// import { setTheme } from './redux/slices/themeSlice';

/* ---------------- */
/* Import Externals */
/* ---------------- */

// React router
import { 
    BrowserRouter, 
    Route, 
    Routes, 
    Navigate 
} from 'react-router-dom';

// Apollo client
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    // createHttpLink
} from "@apollo/client";

// Import pages
import { LandingPage } from './pages';


/* ---------------------------- */
/* Apollo Client Initialization */
/* ---------------------------- */
// const httpLink = createHttpLink({
//     uri: process.env.NODE_ENV === 'production' 
//         ? '/graphql'
//         : 'http://localhost:3001/graphql'
// });

const client = new ApolloClient({
    // link: authLink.concat(httpLink),
    uri: process.env.NODE_ENV === 'production' 
        ? '/graphql'
        : 'http://localhost:3001/graphql',

    cache: new InMemoryCache(),
});
  

/* ------------------ */
/* Main App Component */
/* ------------------ */
function App() {
  const [themeMode, setThemeMode] = useLocalStorage(Enum.StorageKeys.Theme.value, Enum.Themes.Default.value);
  const themeData = themes[themeMode];

  return (
    <AppProvider value={{
      setThemeMode,
      themeMode,
      themeData,
    }}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </AppProvider>
  );
}

export default App;
