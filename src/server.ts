import * as Koa from 'koa'
import * as Router from 'koa-router'
import schema from './graphql/schema'
import mongoose = require('mongoose')
import graphqlHTTP = require('koa-graphql')

const app = new Koa()
const router = new Router()

app.use(async (ctx: Koa.Context, next: any) => {
  await next()
})

mongoose.connect(
  'mongodb://192.168.15.54:27017',
  {
    user: 'root',
    pass: 'example',
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
