const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLInt }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'getUserInfo',
    fields: {
        getUser: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                let data = [{
                        id: 1,
                        name: 'Harsh Verma',
                        email: 'harsh@gmail.com',
                        phone: 1234567890
                    },
                    {
                        id: 2,
                        name: 'Ravi',
                        email: 'ravi@gmail.com',
                        phone: 1234512345
                    }
                ]
                return data
            }
        }
    }
})

module.exports = new GraphQLSchema({ query: RootQuery })