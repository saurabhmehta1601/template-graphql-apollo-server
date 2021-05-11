// contains graphql schemas
const {gql} = require("apollo-server")

const typeDefs = gql`

    type Book{
        name: String!
        author : Author 
    }

    type Author{
        name : String!
        age : Int
        books : [Book!]!
    }

    type Query{
        book (id : Int , name : String ) : Book
        author(id: Int, name:String) : Author
    }

    type Mutation {
        addAuthor : Author
    }
`

module.exports = typeDefs