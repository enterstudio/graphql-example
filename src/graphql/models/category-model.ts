import { Schema, Model, model } from 'mongoose'
import { ICategorySchema } from '../interfaces'

const categorySchema: Schema = new Schema({
  name: { type: String, required: true, max: 256 },
  color: { type: String, required: true, max: 50 },
})

export const Category: Model<ICategorySchema> = model<ICategorySchema>(
  'Category',
  categorySchema
)
