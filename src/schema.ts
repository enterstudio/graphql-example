import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';
import { resolve } from 'url';

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Category from expenses',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: () => {
        return 'avasd465a4sd65496asd'
      }
    },
    name: {
      type: GraphQLString,
      resolve: () => {
        return 'Market'
      }
    },
    color: {
      type: GraphQLString,
      resolve: () => {
        return '#0065FF'
      }
    }
  })
})

const ExpenseType = new GraphQLObjectType({
  name: 'Expense',
  description: 'Typing expense from database',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: () => {
        return 'avasd465a4sd65496asd'
      }
    },
    title: {
      type: GraphQLString,
      resolve: () => {
        return 'Title of expense'
      }
    },
    value: {
      type: GraphQLInt,
      resolve: () => {
        return 999
      }
    },
    category: {
      type: CategoryType,
      resolve: (root) => {
        return root
      }
    }
  })
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      expenses: {
        type: ExpenseType,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (root, args, context) => context
      }
    })
  })
});

export default schema;
