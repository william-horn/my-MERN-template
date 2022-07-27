/*
==========
| SERVER |
==================================================================================================================================

? @author:          William J. Horn
? @doc-name:        server.js
? @doc-created:     00/00/0000

==================================================================================================================================

? @doc-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

==================================================================================================================================

? @doc-todo
=================
| DOCUMENT TODO |
==================================================================================================================================

==================================================================================================================================
*/

/* ---------------- */
/* Import Externals */
/* ---------------- */
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

/* ---------------- */
/* Import Internals */
/* ---------------- */
const path = require("path");
const { typeDefs, resolvers } = require("./schemaGQL");
const dbConnection = require("./config/db-connection");

/* ----------- */
/* Config Vars */
/* ----------- */
const PORT = process.env.PORT || 3001;


/* --------------- */
/* Initializations */
/* --------------- */

// Create new instance of apollo server for GraphQL requests
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});


// Create express server app
const app = express();


/* ---------- */
/* Middleware */
/* ---------- */

// Use app middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Disable page serving when testing graphql with /graphql (browser graphql client)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

/* ------------ */
/* Start Server */
/* ------------ */

// Create apollo server runner
const startApolloServer = async () => {
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    dbConnection.once("open", async () => {
        console.log("database is open");

            // await seed.plantUsers();
            // await seed.plantEvents();
            // console.log('seeds planted!');

        app.listen(PORT, () => {
            console.log(`server running on port: ${PORT}`);
            // console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
        });
    });
};

// Call the async function to start the server
startApolloServer();
  