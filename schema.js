export default `
    type Hospital {
       _id: String,
       name: String 
    }

    type Query{
        allHospitals(name: String!): [Hospital]! 
        getHospital(id: String!): Hospital!
    }

    type Mutation {
          createHospital(
            name: String!
          ): Hospital!
    }
`    