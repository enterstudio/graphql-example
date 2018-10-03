import { GraphQLObjectType, GraphQLString } from 'graphql'

export const CategoryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Category',
  description: 'Category from expenses',

  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    color: {
      type: GraphQLString,
    },
  }),
})

export default CategoryType
