import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql'
import CategoryType from './category-type'
import { Types } from 'mongoose'

export const ExpenseType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Expense',
  description: 'Typing expense from database',

  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLInt,
    },
    category: {
      type: new GraphQLList(GraphQLString),
    },
  }),
})

export default ExpenseType
