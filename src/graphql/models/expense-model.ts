import { Schema, Model, model } from 'mongoose'
import { IExpenseSchema } from '../interfaces';

const expenseSchema: Schema = new Schema({
  title: { type: String, required: true, max: 256 },
  value: { type: Number, required: true, min: 0 },
  category: [{ type: String }]
})

export const Expense: Model<IExpenseSchema> = model<IExpenseSchema>("Expense", expenseSchema);
