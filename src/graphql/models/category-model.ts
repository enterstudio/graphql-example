import { Schema, Document, Model, model } from 'mongoose'

export interface ICategorySchema extends Document {
  name: string,
  color: string
}

const categorySchema: Schema = new Schema({
  name: { type: String, required: true, max: 256 },
  color: { type: String, required: true, max: 50 },
})

export const Category: Model<ICategorySchema> = model<ICategorySchema>("Category", categorySchema);
