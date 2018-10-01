import { GraphQLNonNull, GraphQLString, GraphQLInt } from "graphql";
import { Expense } from '../models/expense-model';
import ExpenseType from "../types/expense-type";
import { IExpenseSchema } from "../interfaces";

const ExpensesMutation = {
  addExpense: {
    type: ExpenseType,
    args: {
      title: {
        name: 'title',
        type: new GraphQLNonNull(GraphQLString)
      },
      value: {
        name: 'value',
        type: new GraphQLNonNull(GraphQLInt)
      },
      category: {
        name: 'category',
        type: GraphQLString
      }
    },
    resolve: async (root, params) => {
      const expenseModel: IExpenseSchema = new Expense(params)
      return await expenseModel.save()
    }
  }
};

export default ExpensesMutation
