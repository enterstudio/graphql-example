import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";
import CategoryType from "./category-type";

export const ExpenseType = new GraphQLObjectType({
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
      type: CategoryType,
    }
  })
})

export default ExpenseType
