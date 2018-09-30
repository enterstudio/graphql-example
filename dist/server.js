"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const schema_1 = require("./graphql/schema");
const graphqlHTTP = require('koa-graphql');
const app = new Koa();
const router = new Router();
app.use(async (ctx, next) => {
    console.log('Url:', ctx.url);
    await next();
});
router.all('/graphql', graphqlHTTP({
    schema: schema_1.default,
    graphiql: true
}));
app.use(router.routes());
app.listen(3000);
console.log('Server running on port 3000');
//# sourceMappingURL=server.js.map