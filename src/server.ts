import * as Koa from 'koa';
import * as Router from 'koa-router';
import schema from './schema';

const graphqlHTTP = require('koa-graphql');

const app = new Koa();

app.use(async (ctx: Koa.Context, next: any) => {
  console.log('Url:', ctx.url);
  await next();
});

const router = new Router();

router.all('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
