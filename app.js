const cors = require("cors");
const Koa = require('koa');
const {
    jwtMiddleware, rtMiddleware, responseMiddleware, requestLogger,
  } = require('./utils/middlewares');
const { routerV1 } = require('./routers');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');

  
require("dotenv").config();




const app = new Koa();
app.use(cors());

app.use(bodyParser({
  formLimit: '10mb',
  jsonLimit: '10mb',
}));

app.use(jwtMiddleware);

app.use(rtMiddleware);

app.use(responseMiddleware);

app.use(requestLogger);

const router = new Router();
router.use('/v1', routerV1.routes());

app.use(router.routes());



module.exports = app;