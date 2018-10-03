import ExpenseQuery from './expense-query';
import CategoryQuery from './category-query'
import { GraphQLObjectType } from 'graphql';

const QueryType = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
    ...ExpenseQuery,
    ...CategoryQuery
	})
});

export default QueryType;
