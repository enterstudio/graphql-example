import ExpenseQuery from './expense-query';
import { GraphQLObjectType } from 'graphql';

const QueryType = new GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		...ExpenseQuery
	})
});

export default QueryType;
