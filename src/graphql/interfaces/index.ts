import { Document } from "mongoose";

export interface IExpenseSchema extends Document {
  title: string,
  value: Int32Array,
  category?: Array<ICategorySchema>
}

export interface ICategorySchema extends Document {
  name: string,
  color: string
}
