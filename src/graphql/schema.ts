import { GraphQLSchema } from 'graphql'
import MutationType from './mutations'
import QueryType from './queries'

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
})

export default schema
