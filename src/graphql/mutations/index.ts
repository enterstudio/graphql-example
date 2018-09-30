import ExpensesMutation from './expenses-mutation';
import {GraphQLObjectType} from 'graphql';

const MutationType = new GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		...ExpensesMutation
	})
});

export default MutationType;
