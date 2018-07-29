import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
require('dotenv').config()

import types from './schema';
import Hospital from './models/Hospital';
import resolvers from "./resolvers";

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST);

const schema = makeExecutableSchema({
    typeDefs: types,
    resolvers
})

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res)=>{
    res.json({
        msg: 'Welcome to GraphQl'
    })
});

app.use(
    '/graphql', 
    bodyParser.json(), 
    graphqlExpress({ schema, context: {Hospital} })
);

app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
}); 