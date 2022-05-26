const app = require('./app');
const mongoose = require('mongoose');
const { consoleLogger } = require('./configs/logger');

app.env = process.env.NODE_ENV || 'development';

const dburl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/idlvr?retryWrites=true&w=majority`;

mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    consoleLogger.info('Database Connected')
    app.listen(process.env.PORT || 3000, () => {
        consoleLogger.info(`server is running at ${process.env.PORT}`);
        console.log(`Application server is running at ${process.env.PORT} `);

  });
}).catch((err) => {
    consoleLogger.error(err);
});
  

