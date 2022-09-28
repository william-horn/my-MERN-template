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
import { useSavedState } from './hooks/useSavedState';
import { ThemeProvider } from 'styled-components';
import Test from './components/Test';
import Enum from './enums';
import { ContextProvider } from './providers/ContextProvider';

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
  // const dispatch = useDispatch();
  // const themeMode = useSelector(state => state.theme.mode);
  const [theme, setTheme] = useSavedState(Enum.StorageKeys.Theme.value, Enum.Themes.Default.value);

  return (
    <ContextProvider source={Enum.ContextStore.App} value={{theme, setTheme}}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </ContextProvider>
  );
}

export default App;
