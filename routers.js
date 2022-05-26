const Router = require('@koa/router');
const userRouter = require('./components/users/router');
const historyRouter = require('./components/history/router');


const routerV1 = new Router();

routerV1.use('/users', userRouter.routes());
routerV1.use('/location-history', historyRouter.routes());

module.exports = {
  routerV1,
};
