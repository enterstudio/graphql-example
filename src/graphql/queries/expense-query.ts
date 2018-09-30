import { ExpenseType } from "../types/expense-type";
import { Expense } from "../models/expense-model";

const queries = {
	expenses: {
		type: ExpenseType,
		resolve: async () => {
      return await Expense.find({})
      // return console.log('expenses')
		}
	}
}

export default queries;
