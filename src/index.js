const typeDefs = require("./schema")
const {ApolloServer} = require("apollo-server")




const server = new ApolloServer({
    typeDefs 
})

server.listen().then(({url})=>{
    console.log("> Apollo server running at "+url)
})