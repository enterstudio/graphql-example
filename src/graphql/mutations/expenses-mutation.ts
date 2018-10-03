import { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import { Expense } from '../models/expense-model'
import ExpenseType from '../types/expense-type'
import { IExpenseSchema } from '../interfaces'
import CategoryType from '../types/category-type'

const ExpensesMutation = {
  addExpense: {
    type: ExpenseType,
    args: {
      title: {
        name: 'title',
        type: new GraphQLNonNull(GraphQLString),
      },
      value: {
        name: 'value',
        type: new GraphQLNonNull(GraphQLInt),
      },
      category: {
        name: 'category',
        type: new GraphQLList(GraphQLString),
      },
    },
    resolve: (root, params) => {
      const expenseModel: IExpenseSchema = new Expense(params)
      return expenseModel.save()
    },
  },
}

export default ExpensesMutation
