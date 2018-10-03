import ExpensesMutation from './expenses-mutation'
import CategoriesMutation from './category-mutation'
import { GraphQLObjectType } from 'graphql'

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...ExpensesMutation,
    ...CategoriesMutation,
  }),
})

export default MutationType
