import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();

app.use(async (ctx: Koa.Context, next: any) => {
  console.log('Url:', ctx.url);
  await next();
});

const router = new Router();

router.get('/*', async (ctx: Koa.Context) => {
  ctx.body = 'Hello World';
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
