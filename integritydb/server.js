const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
// add middleware for authentication here!!

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers
  //middleware
});

async function startup() {
  await server.start();
  server.applyMiddleware({ app });
}
startup();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/integritysandc"
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established");
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});
