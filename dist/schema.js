"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const CategoryType = new graphql_1.GraphQLObjectType({
    name: 'Category',
    description: 'Category from expenses',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLString,
            resolve: () => {
                return 'avasd465a4sd65496asd';
            }
        },
        name: {
            type: graphql_1.GraphQLString,
            resolve: () => {
                return 'Market';
            }
        },
        color: {
            type: graphql_1.GraphQLString,
            resolve: () => {
                return '#0065FF';
            }
        }
    })
});
const ExpenseType = new graphql_1.GraphQLObjectType({
    name: 'Expense',
    description: 'Typing expense from database',
    fields: () => ({
        id: {
            type: graphql_1.GraphQLString,
            resolve: () => {
                return 'avasd465a4sd65496asd';
            }
        },
        title: {
            type: graphql_1.GraphQLString,
            resolve: () => {
                return 'Title of expense';
            }
        },
        value: {
            type: graphql_1.GraphQLInt,
            resolve: () => {
                return 999;
            }
        },
        category: {
            type: CategoryType,
            resolve: (root) => {
                return root;
            }
        }
    })
});
const schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: () => ({
            expenses: {
                type: ExpenseType,
                args: {
                    id: { type: graphql_1.GraphQLInt }
                },
                resolve: (root, args, context) => context
            }
        })
    })
});
exports.default = schema;
//# sourceMappingURL=schema.js.map