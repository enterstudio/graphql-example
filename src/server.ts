import * as Koa from 'koa'
import * as Router from 'koa-router'
import schema from './graphql/schema'
import mongoose = require('mongoose')
import graphqlHTTP = require('koa-graphql')
import { DB_PATH, DB_USER, DB_PASS } from './config/environment-variables'

const app = new Koa()
const router = new Router()

app.use(async (ctx: Koa.Context, next: any) => {
  await next()
})

mongoose.connect(
  DB_PATH,
  {
    user: DB_USER,
    pass: DB_PASS,
    useNewUrlParser: true,
  }
)

mongoose.Promise = global.Promise

router.all(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.use(router.routes())

app.listen(3000)
