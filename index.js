const express = require("express");
const port = 3001;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// connect to mlab db
mongoose.connect(
  "mongodb+srv://davahamka:123@cluster0.vxae9.mongodb.net/gql-express?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(cors())

// get graphql schema
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
