import { ExpenseType } from "../types/expense-type";
import { Expense, IExpenseSchema } from "../models/expense-model";
import { GraphQLList } from "graphql";

const queries = {
	expenses: {
		type: new GraphQLList(ExpenseType),
		resolve: async () => {
      return await Expense.find({})
		}
	}
}

export default queries;
