import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from "graphql";
import CategoryType from "./category-type";

export const ExpenseType = new GraphQLObjectType({
  name: 'Expense',
  description: 'Typing expense from database',

  fields: () => ({
    _id: {
      type: GraphQLID,
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
