import { ExpenseType } from '../types/expense-type'
import { Expense } from '../models/expense-model'
import { GraphQLList } from 'graphql'

const queries = {
  expenses: {
    type: new GraphQLList(ExpenseType),
    resolve: () => {
      return Expense.find({})
    },
  },
}

export default queries
