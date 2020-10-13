const userResolves = require('./users')
const messagesResolves = require('./messages')

module.exports = {
    Message: {
        createdAt: (parent) => parent.createdAt.toISOString(),
      },
    Query: {
        ...userResolves.Query,
        ...messagesResolves.Query
    },
    Mutation: {
        ...userResolves.Mutation,
        ...messagesResolves.Mutation
    }
}