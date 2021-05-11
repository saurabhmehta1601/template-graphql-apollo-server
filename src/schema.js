const {gql} = require("apollo-server")

const typeDefs = gql`
    type Query{
        name : String
        age(value : Int ): Int !
    }
`

module.exports = typeDefs