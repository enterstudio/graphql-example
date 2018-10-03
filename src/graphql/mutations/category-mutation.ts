import { GraphQLNonNull, GraphQLString } from 'graphql'
import CategoryType from '../types/category-type'
import { Category } from '../models/category-model'
import { ICategorySchema } from '../interfaces'

const CategoriesMutation = {
  addCategory: {
    type: CategoryType,
    args: {
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString),
      },
      color: {
        name: 'color',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve: (root, params) => {
      const categoryModel: ICategorySchema = new Category(params)
      return categoryModel.save()
    },
  },
}

export default CategoriesMutation
