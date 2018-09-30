import { Schema, Document, Model, model } from 'mongoose'
import { ICategorySchema } from './category-model';

export interface IExpenseSchema extends Document {
  title: string,
  value: Int32Array,
  category?: Array<ICategorySchema>
}

const expenseSchema: Schema = new Schema({
  title: { type: String, required: true, max: 256 },
  value: { type: Number, required: true, min: 0 },
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})

export const Expense: Model<IExpenseSchema> = model<IExpenseSchema>("Expense", expenseSchema);
