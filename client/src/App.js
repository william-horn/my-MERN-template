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
import themes from './themes.json';
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
  const [theme, setTheme] = useLocalStorage(Enum.StorageKeys.Theme.value, Enum.Themes.Default.value);
  const themeData = themes[theme];
  // console.log('app rendered (theme): ', theme, themeData);

  return (
    <ContextProvider source={Enum.ContextSource.App} value={{
      setTheme,
      themeData,
    }}>
      <ThemeProvider theme={themeData}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
            </Routes>
          </BrowserRouter>
        </ApolloProvider>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
