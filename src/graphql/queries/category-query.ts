import { GraphQLList } from "graphql";
import CategoryType from "../types/category-type";
import { Category } from "../models/category-model";

const queries = {
	categories: {
		type: new GraphQLList(CategoryType),
		resolve: async () => {
      return await Category.find({})
		}
	}
}

export default queries;
